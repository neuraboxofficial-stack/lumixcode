# LumixCode - AI-Powered Coding Platform

## Overview

LumixCode is a modern SaaS landing page for an AI-powered development platform that enables developers to plan, write, test, deploy, and monetize applications using "LumixCore" technology. The application is built as a full-stack web application with a React frontend and Express backend, featuring authentication, a marketing landing page, and a founders' program enrollment system.

The platform follows a futuristic design aesthetic inspired by Linear, Vercel, and GitHub, with deep navy backgrounds, electric blue gradients, and neon purple accents. The landing page showcases the product's five core capabilities (Plan, Write, Test, Deploy, Earn) and includes integration showcases, trust logos, and multiple call-to-action sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching

**UI Component Library**
- Shadcn/ui component system with Radix UI primitives for accessibility
- Tailwind CSS for utility-first styling with custom design tokens
- Custom theme system supporting light/dark modes via CSS variables
- Design guidelines emphasizing gradients, glows, and microinteractions

**Design System**
- Color palette: Deep navy backgrounds (#0A0E27, #1A1F3A) with electric blue (#0066FF, #00D4FF) and neon purple (#A855F7, #C026D3) accents
- Typography: Space Grotesk for display text, Inter for body text
- Spacing system: Tailwind's 4/6/8/12/16/20/24/32 unit rhythm
- Custom animations including hover elevations, glows, and slide-in effects

**Page Structure**
- Home page: Hero section, integrations strip, trust logos, features grid, CTA section
- Founders Forge: Special membership program landing page
- Waitlist: Email collection page for early access
- Authentication: Sign-in and sign-up pages (Clerk integration)

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Custom middleware for request logging and JSON body parsing
- Vite middleware integration for development hot reloading
- HTTP server created separately for potential WebSocket upgrades

**API Design**
- RESTful API structure with `/api` prefix for all application routes
- Currently minimal backend logic - storage interface prepared for future CRUD operations
- Separation of concerns: routes defined in `routes.ts`, storage abstraction in `storage.ts`

**Storage Abstraction**
- Interface-based storage pattern (`IStorage`) for flexibility
- In-memory implementation (`MemStorage`) as the current default
- Prepared for future database integration via the storage interface
- User model with id, username, and password fields defined

### Authentication and Authorization

**Clerk Integration**
- Clerk React SDK for frontend authentication flows
- Environment-based configuration via `VITE_CLERK_PUBLISHABLE_KEY`
- SignIn and SignUp components with custom styling
- UserButton component for authenticated user management
- Graceful fallback when Clerk credentials are missing

**Session Management**
- Client-side session handling via Clerk
- Cookie-based credentials with `include` mode for API requests
- Protected routes wrapped with `<SignedIn>` and `<SignedOut>` components

### Data Storage Solutions

**Current Implementation**
- In-memory data storage via `MemStorage` class
- UUID-based user ID generation using Node's crypto module
- Map-based storage for fast lookups

**Database Schema (Prepared)**
- Drizzle ORM configured for PostgreSQL
- Schema defined for users table with UUID primary keys
- Zod schema validation via `drizzle-zod` for type-safe insertions
- Migration system configured but not actively used (in-memory storage is current default)

**Database Connection (Configured)**
- Neon Database serverless driver configured
- Environment variable `DATABASE_URL` for connection string
- Migration directory set to `./migrations`
- Schema location: `./shared/schema.ts`

### External Dependencies

**Third-Party Services**
- **Clerk**: Authentication and user management platform
  - Handles sign-up, sign-in, session management
  - Provides pre-built UI components and hooks
  - Requires `VITE_CLERK_PUBLISHABLE_KEY` environment variable

**Database & ORM**
- **Neon Database**: Serverless PostgreSQL (configured, not actively used)
  - Connection via `@neondatabase/serverless` driver
  - Requires `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe SQL query builder
  - Schema definition and migration management
  - Integration with Zod for validation

**UI & Component Libraries**
- **Radix UI**: Unstyled, accessible component primitives
  - Accordion, Dialog, Dropdown Menu, Popover, Toast, and 20+ other primitives
  - Ensures WCAG compliance and keyboard navigation
- **Shadcn/ui**: Pre-styled component system built on Radix UI
  - Customizable via Tailwind CSS
  - "New York" style variant selected

**Styling & Animations**
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **Framer Motion**: Animation library for the Founders Forge page
- **Lucide React**: Icon library for UI elements
- **React Icons**: Additional icon sets (Simple Icons for brand logos)

**Utilities**
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **clsx** & **tailwind-merge**: Conditional class name composition

**Development Tools**
- **Vite Plugins**: Runtime error modal, cartographer (Replit integration), dev banner
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Server-side bundling for production builds