# EVO System Integrator - IoT and AI Solutions Platform

## Overview

EVO is a comprehensive enterprise IoT and AI solutions platform designed to serve smart retail, smart home, smart warehouse, and custom solution sectors across Southeast Asia. The project has been successfully migrated from Replit Agent to standard Replit environment (August 12, 2025) with full TypeScript implementation, secure client/server separation, and modern React architecture. The platform showcases the company's capabilities in providing integrated, personalized, and affordable enterprise technology solutions across 30+ cities in Southeast Asia.

## Recent Changes

**August 13, 2025 - Navigation Menu Standardization**
- Updated home page navigation menu to match about.html design for consistency
- Changed logo from `logo-redesigned` class to standard `logo` class with `/logo-evo.png` image
- Added clickable link wrapper around home page logo
- Updated dropdown menu to use `horizontal-menu` class for consistent styling across all pages
- Home page navigation now matches the design pattern used throughout the site

**August 13, 2025 - Page-Specific Hero Updates**
- Updated hero section descriptions and statistics to be content-specific rather than generic
- Removed "30+ cities in Southeast Asia" emphasis to focus on page-specific value propositions and metrics
- Smart Retail: Description focuses on customer experience optimization; Stats show "40% Sales Increase"
- Smart Home: Emphasizes home automation integration; Stats show "35% Energy Savings"
- Custom Solutions: Highlights tailored development approach; Stats show "100+ Custom Projects"
- Retail Traffic Analytics: Features AI-powered analytics; Stats show "99% Accuracy Rate"
- Electronic Shelf Labels: Showcases real-time pricing updates; Stats show "5+ Years Battery"
- Interactive Marketing Screens: Promotes AI-powered displays; Stats show "3x More Engagement"
- All descriptions and statistics now reflect specific page content and benefits rather than generic company information

**August 13, 2025 - Landing Page Design Standardization**
- Applied modern hero section design from retail-traffic-analytic.html to all HTML files
- Updated hero sections to use `hero-modern` class with consistent two-column layout
- Implemented `hero-content-modern` structure with separate text and visual sections
- Added `hero-visual-modern` containers with relevant product/service images
- Integrated stats badges showing "30+ Cities Covered" across all pages
- Applied page-specific hero images: retail heatmap analysis, warehouse automation, home automation, IoT ecosystem, enterprise IoT, product SVGs
- Ensured consistent title structure with "Reliable & Scalable" main title and page-specific accent title
- Standardized hero description messaging across all pages
- Updated pages: index.html, smart-retail.html, smart-warehouse.html, smart-home.html, custom-solutions.html, about.html, electronic-shelf-label.html, interactive-marketing-screen.html, rfid-inventory.html

**August 13, 2025 - Homepage Hero Design Update**
- Replaced Southeast Asia map background with clean white background
- Added new EVO digital logo as the main hero visual element
- Simplified hero section design with transparent text container
- Removed all overlays and glass-morphism effects for cleaner appearance
- Enhanced visual hierarchy with focused logo presentation

**August 13, 2025 - Page-Specific Hero Background Integration**
- Smart Retail: Added heatmap analysis background image positioned right-aligned
- Smart Warehouse: Integrated automated warehousing SVG as subtle background
- Smart Home: Added home automation SVG background for visual context
- Custom Solutions: Applied IoT ecosystem SVG background design
- About: Integrated enterprise IoT SVG background element
- Product pages: Clean design without specific background images
- All backgrounds use subtle opacity (0.1-0.15) to maintain text readability
- Consistent glass-morphism box design across all hero sections

**August 13, 2025 - Design Theme Consistency Update**
- Updated hero sections across all pages from dark blue to clean white background
- Applied consistent button styling with proper color schemes for white background
- Updated text colors for better contrast and readability on white background
- Standardized hero section structure with modern button layouts
- Maintained clean, modern design aesthetic across all pages
- Applied glass-morphism box design with elegant rounded buttons (50px border-radius)
- Implemented gradient color transitions and backdrop blur effects
- Removed hero images from all pages except homepage for consistent clean appearance
- Updated pages: index.html, smart-retail.html, smart-warehouse.html, smart-home.html, custom-solutions.html, about.html, electronic-shelf-label.html, interactive-marketing-screen.html, rfid-inventory.html

**August 13, 2025 - Migration Complete**
- Successfully migrated from Replit Agent to standard Replit environment
- Verified all dependencies and packages are properly installed
- Confirmed Express server running on port 5000 with proper routing
- Validated React frontend with TypeScript and Vite configuration
- Confirmed database schema with Drizzle ORM integration
- Project follows security best practices with proper client/server separation
- Migration checklist completed successfully with user confirmation
- User verified website is loading correctly and displaying all content as expected
- Project is now fully operational in Replit environment and ready for development
- All migration checklist items marked as complete: packages installed, workflow running, project verified, migration completed

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**React with TypeScript SPA**
- Built using Vite for fast development and optimized builds
- Component-based architecture with shadcn/ui design system
- TailwindCSS for styling with custom design tokens
- React Query for state management and API caching
- Wouter for lightweight client-side routing

**Design System Approach**
- Comprehensive UI component library based on Radix UI primitives
- Consistent styling through CSS variables and design tokens
- Responsive design with mobile-first approach
- Dark mode support through CSS custom properties

### Backend Architecture

**Express.js REST API**
- RESTful API endpoints for contact form submission
- Middleware for request logging and error handling
- Session management with PostgreSQL store
- Environment-based configuration

**Development Integration**
- Vite development server integration for hot module replacement
- Static file serving for production builds
- Request/response logging middleware for debugging

### Data Storage Solutions

**Database Architecture**
- PostgreSQL as primary database using Neon serverless
- Drizzle ORM for type-safe database operations
- Schema migrations managed through Drizzle Kit
- Connection pooling through Neon serverless adapter

**Data Models**
- User management system with authentication
- Contact message storage with timestamp tracking
- Schema validation using Zod for type safety

**Storage Abstraction**
- Interface-based storage layer for flexibility
- In-memory storage implementation for development
- PostgreSQL implementation for production
- Easy switching between storage backends

### External Dependencies

**Database Services**
- Neon PostgreSQL serverless database
- Connection management through @neondatabase/serverless

**UI and Component Libraries**
- Radix UI for accessible component primitives
- Lucide React for consistent iconography
- shadcn/ui for pre-built components
- Embla Carousel for image carousels

**Development and Build Tools**
- Vite for frontend build tooling and development server
- TypeScript for type safety across the stack
- ESBuild for backend bundling
- Drizzle Kit for database migrations

**Utility Libraries**
- React Hook Form with Zod resolvers for form management
- TanStack React Query for server state management
- date-fns for date manipulation
- class-variance-authority for component variant management

**Email Integration**
- Nodemailer for transactional email sending
- Contact form submissions trigger automated emails
- Email delivery to company inbox (hello@evo.id)

**Styling and Design**
- TailwindCSS for utility-first styling
- PostCSS for CSS processing
- Custom CSS variables for theming
- Responsive design utilities
- Consistent hero sections across all pages with relevant imagery
- Enhanced visual design following home page template