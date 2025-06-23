import { useParams } from "wouter";
import { useLocation } from "wouter";
import Header from "@/components/layout/header";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const projectId = params.id;
  
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-bg-primary">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-4">Project not found</h1>
            <button 
              onClick={() => setLocation("/work")}
              className="text-accent hover:underline"
            >
              ← Back to Work
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Back button */}
        <motion.button
          onClick={() => setLocation("/work")}
          className="flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowLeft size={20} />
          <span>Back to Work</span>
        </motion.button>

        {/* Project header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-primary">
            {project.title}
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="font-semibold text-primary mb-2">Role</h3>
              <p className="text-text-secondary">{project.role}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-2">Project Timeline</h3>
              <p className="text-text-secondary">{project.timeline}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-primary mb-2">Tools</h3>
              <p className="text-text-secondary">{project.tools?.join(", ")}</p>
            </div>
          </div>

          {/* Project overview */}
          {project.content?.overview && (
            <div className="mb-12">
              <p className="text-text-secondary text-lg leading-relaxed">
                {project.content.overview}
              </p>
            </div>
          )}
        </motion.div>

        {/* Project content */}
        <div className="space-y-16">
          {/* Main project images */}
          {project.content?.images && project.content.images.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="grid gap-8">
                {project.content.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full rounded-2xl shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Project sections */}
          {project.content?.sections && project.content.sections.map((section, index) => (
            <motion.div
              key={index}
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
            >
              <div>
                <h2 className="text-3xl font-semibold mb-6 text-primary">
                  {section.title}
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {section.content}
                </p>
              </div>
              
              {section.image && (
                <div className="relative">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Navigation to next project */}
        <motion.div
          className="mt-24 pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center">
            <button
              onClick={() => setLocation("/work")}
              className="inline-flex items-center space-x-2 bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90 transition-colors"
            >
              <span>View More Projects</span>
            </button>
          </div>
        </motion.div>
      </main>
      
      <footer className="bg-white border-t border-gray-100 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-text-secondary">
              &copy; 2024 Jiwoo Park. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}