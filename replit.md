# Overview

This is a full-stack web application built as a personal portfolio website for a backend developer and AI specialist named Alex Johnson. The application showcases a modern developer portfolio with multiple sections including hero, about, projects, tech stack, skills, and contact forms. It's built using a React frontend with TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM for data management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React and TypeScript, using modern UI patterns and libraries:
- **UI Framework**: React with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation for form handling

## Backend Architecture
The server follows a clean Express.js architecture with modular design:
- **Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL (Neon serverless database)
- **Storage Interface**: Abstracted storage layer with both memory and database implementations
- **API Design**: RESTful API structure with centralized route registration
- **Session Management**: Express sessions with PostgreSQL session store

## Development & Build System
- **Build Tool**: Vite for fast development and optimized production builds
- **Module System**: ESM modules throughout the application
- **Development Server**: Custom Vite integration with HMR support
- **Static Assets**: Vite handles client-side assets with proper optimization

## Data Layer Design
The application uses a schema-first approach with Drizzle:
- **Schema Definition**: Centralized schema in shared directory for type consistency
- **Type Generation**: Automatic TypeScript type generation from database schema
- **Migration System**: Drizzle Kit for database migration management
- **Validation**: Zod schemas derived from Drizzle schemas for runtime validation

## Component Architecture
The UI follows atomic design principles:
- **Base Components**: Reusable UI primitives from shadcn/ui
- **Composed Components**: Business logic components combining base elements
- **Page Components**: High-level page layouts and routing components
- **Section Components**: Modular page sections for portfolio content

# External Dependencies

## Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless database driver
- **drizzle-orm**: Modern TypeScript ORM for database operations
- **express**: Node.js web framework for API server
- **react**: Frontend UI library with hooks and modern patterns
- **@tanstack/react-query**: Server state management and caching

## UI and Styling Dependencies
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Accessible UI primitive components
- **framer-motion**: Animation library for React components
- **lucide-react**: Modern icon library
- **react-icons**: Additional icon collections

## Development and Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking
- **drizzle-kit**: Database migration and introspection tool
- **esbuild**: Fast JavaScript bundler for production builds

## Form and Validation Libraries
- **react-hook-form**: Performant form library with validation
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library
- **drizzle-zod**: Integration between Drizzle and Zod schemas

## Session and Authentication
- **connect-pg-simple**: PostgreSQL session store for Express
- **express-session**: Session middleware (implied by session store usage)

The application is configured for deployment on Replit with specialized Vite plugins for the platform's development environment.