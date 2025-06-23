# UX/UI Designer Portfolio

A modern, minimalist portfolio website built for UX/UI designers to showcase their work, share design insights, and connect with potential clients or employers.

## Features

- **Portfolio Showcase**: Grid-based project display with hover animations
- **Project Details**: Comprehensive project pages with role, timeline, tools, and process documentation
- **Design Blog**: Article publishing system for design insights and thoughts
- **Responsive Design**: Mobile-first approach with clean, professional aesthetics
- **Interactive Animations**: Smooth transitions using Framer Motion
- **Modern Stack**: Built with React, TypeScript, and Tailwind CSS

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Framer Motion** for animations
- **Wouter** for client-side routing
- **TanStack Query** for state management

### Backend
- **Express.js** with TypeScript
- **PostgreSQL** with Drizzle ORM
- **Neon Database** integration ready

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

## Project Structure

```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── data/         # Static data (projects, blog posts)
│   │   └── lib/          # Utilities and configuration
│   └── index.html
├── server/               # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage interface
├── shared/               # Shared TypeScript schemas
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## Customization

### Adding Projects
Edit `client/src/data/projects.ts` to add your portfolio projects:

```typescript
{
  id: "project-id",
  title: "Project Title",
  description: "Brief description",
  category: "ux-ui" | "mobile" | "web",
  imageUrl: "https://example.com/image.jpg",
  role: "Your role in the project",
  timeline: "Project duration",
  tools: ["Figma", "Adobe XD"],
  team: "Team information",
  content: {
    overview: "Project overview",
    images: ["image1.jpg", "image2.jpg"],
    sections: [
      {
        title: "Section Title",
        content: "Section content",
        image: "section-image.jpg"
      }
    ]
  }
}
```

### Adding Blog Posts
Edit `client/src/data/blog-posts.ts` to add design articles:

```typescript
{
  id: "post-id",
  title: "Post Title",
  description: "Post description",
  category: "Design Process",
  readTime: "5 min read",
  publishedDate: "2024-01-15",
  content: `<h2>Your HTML content here</h2>`
}
```

### Styling
The design uses a clean, minimalist approach with:
- Custom color palette defined in `client/src/index.css`
- Responsive grid layouts
- Smooth hover animations
- Professional typography

## Deployment

This project is configured for deployment on various platforms:

### Vercel/Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder

### Railway/Heroku
1. Set `NODE_ENV=production`
2. The app will serve built files automatically

## Database Setup (Optional)

For dynamic content management, set up PostgreSQL:

1. Create a PostgreSQL database
2. Set `DATABASE_URL` environment variable
3. Run migrations: `npm run db:migrate`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Jiwoo Park - [hello@jiwoopark.com](mailto:hello@jiwoopark.com)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)