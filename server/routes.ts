import type { Express } from "express";
import express from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
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
      
      console.log("New contact message received:", {
        id: message.id,
        email: validatedData.email,
        company: validatedData.company || 'Not provided',
        subject: validatedData.subject,
        timestamp: message.createdAt
      });
      
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
