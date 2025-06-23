# replit.md

## Overview

This is a modern full-stack web application built as a portfolio website for a UX/UI designer. The application features a clean, minimalist design showcasing design work, blog posts, and professional information. It's built with a React frontend and Express.js backend, utilizing PostgreSQL for data persistence and styled with Tailwind CSS and shadcn/ui components.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js with TypeScript for API routes
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations  
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth interactions

## Key Components

### Frontend Architecture
- **Pages**: Home (redirects to work), Work (portfolio showcase), Blog (design insights), About (personal information)
- **Components**: Reusable UI components from shadcn/ui, custom portfolio components
- **Layout**: Responsive design with sticky navigation header
- **Data**: Static data for projects and blog posts, with structure ready for API integration

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Routes**: API routes prefixed with `/api` (currently empty, ready for implementation)
- **Storage**: Abstract storage interface with both memory and database implementations
- **Middleware**: Request logging, JSON parsing, error handling

### Database Schema
- **Users Table**: Basic user authentication structure with username/password
- **Drizzle ORM**: Type-safe database operations with schema validation using Zod

## Data Flow

1. **Static Content**: Portfolio projects and blog posts are currently stored as static data
2. **API Ready**: Backend infrastructure is set up to serve dynamic content via REST endpoints
3. **Query Management**: TanStack Query configured for efficient data fetching and caching
4. **Type Safety**: End-to-end TypeScript ensures type safety from database to UI

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon database driver for PostgreSQL
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight client-side routing
- **framer-motion**: Animation library for smooth transitions

### UI Dependencies
- **@radix-ui/**: Comprehensive collection of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: `npm run dev` starts both frontend and backend in development mode
- **Build**: `npm run build` creates optimized production builds
- **Production**: `npm run start` serves the built application
- **Database**: Configured for PostgreSQL with environment variable setup
- **Port Configuration**: Backend serves on port 5000, mapped to external port 80

The build process:
1. Vite builds the React frontend to `dist/public`
2. ESBuild bundles the Express server to `dist/index.js`
3. Static files are served by the Express server in production

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
- June 23, 2025. Added project detail pages with full project information
- June 23, 2025. Updated portfolio thumbnail hover animations with white overlay
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```