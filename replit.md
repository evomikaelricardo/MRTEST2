# EVO System Integrator - IoT and AI Solutions Platform

## Overview
EVO is a comprehensive enterprise IoT and AI solutions platform designed for smart retail, smart home, smart warehouse, and custom solutions across Southeast Asia. The platform aims to provide integrated, personalized, and affordable enterprise technology solutions, showcasing the company's capabilities in the region.

## Recent Changes
- **August 15, 2025**: Successfully migrated project from Replit Agent to standard Replit environment
  - Verified all dependencies and packages are properly installed
  - Confirmed workflow runs correctly with Express server on port 5000
  - Maintained existing architecture and security practices
  - Project is now fully operational in Replit environment

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
Built with React and TypeScript using Vite for a fast, component-based Single Page Application. It utilizes shadcn/ui for its design system, TailwindCSS for styling, React Query for state management, and Wouter for routing. A consistent design system based on Radix UI primitives ensures responsive design and dark mode support.

### Backend Architecture
Uses Express.js to provide RESTful API endpoints, primarily for contact form submissions. It includes middleware for logging and error handling, and session management with a PostgreSQL store. The development environment integrates with Vite for hot module replacement and serves static files for production.

### Data Storage Solutions
PostgreSQL, specifically Neon serverless, serves as the primary database. Drizzle ORM is used for type-safe database operations and schema migrations. Data models include user management and contact message storage with Zod for schema validation. An interface-based storage layer allows for flexible switching between in-memory and PostgreSQL backends.

### UI/UX Decisions
The platform features a modern, clean design aesthetic with a focus on consistency. All SVG icons are standardized to 64x64px with a 1:1 aspect ratio, using a consistent color palette of #001765 (dark blue), #00BCD4 (cyan/teal), and white. Hero sections across all pages maintain a consistent modern two-column layout with light-blue-to-white gradients and glass-morphism effects. CTA buttons are standardized for a uniform user experience.

## External Dependencies

### Database Services
- Neon PostgreSQL serverless database
- @neondatabase/serverless for connection management

### UI and Component Libraries
- Radix UI for accessible component primitives
- Lucide React for iconography
- shadcn/ui for pre-built components
- Embla Carousel for image carousels

### Development and Build Tools
- Vite for frontend build tooling and development server
- TypeScript for type safety
- ESBuild for backend bundling
- Drizzle Kit for database migrations

### Utility Libraries
- React Hook Form with Zod resolvers for form management
- TanStack React Query for server state management
- date-fns for date manipulation
- class-variance-authority for component variant management

### Email Integration
- Nodemailer for transactional email sending, specifically for contact form submissions to hello@evo.id.

### Styling and Design
- TailwindCSS for utility-first styling
- PostCSS for CSS processing