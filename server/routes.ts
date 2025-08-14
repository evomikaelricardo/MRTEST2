import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from client/public
  app.use(express.static(path.join(process.cwd(), "client/public")));

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the message
      const message = await storage.createContactMessage(validatedData);
      
      // Send email to hello@evo.id
      await sendContactEmail(validatedData);
      
      res.json({ 
        success: true, 
        message: "Contact message sent successfully",
        id: message.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to send contact message" 
      });
    }
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact messages" 
      });
    }
  });

  // Serve the main HTML file for all other routes (SPA fallback)
  app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "client/public/index.html"));
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function sendContactEmail(contactData: any) {
  try {
    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || process.env.EMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || process.env.EMAIL_USER,
      to: "hello@evo.id",
      subject: `New Contact Form Submission: ${contactData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${contactData.email}</p>
        ${contactData.company ? `<p><strong>Company:</strong> ${contactData.company}</p>` : ''}
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${contactData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from the EVO website contact form.</em></p>
      `,
      text: `
        New Contact Form Submission
        
        From: ${contactData.email}
        ${contactData.company ? `Company: ${contactData.company}` : ''}
        Subject: ${contactData.subject}
        
        Message:
        ${contactData.message}
        
        ---
        This message was sent from the EVO website contact form.
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
