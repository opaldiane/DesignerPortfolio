import Header from "@/components/layout/header";
import ProjectCard from "@/components/portfolio/project-card";
import { projects } from "@/data/projects";
import { useLocation } from "wouter";

export default function Work() {
  const [, setLocation] = useLocation();
  
  const handleProjectClick = (projectId: string) => {
    setLocation(`/project/${projectId}`);
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-4 text-primary">Selected Work</h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            A collection of user experience and interface design projects showcasing 
            problem-solving through thoughtful design solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project.id)}
            />
          ))}
        </div>
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
