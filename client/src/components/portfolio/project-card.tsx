import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card bg-white rounded-2xl shadow-sm hover:shadow-lg cursor-pointer overflow-hidden group"
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onClick={onClick}
      style={{ aspectRatio: '1' }}
    >
      <div className="relative w-full h-full">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-black font-semibold text-2xl mb-3">
              {project.title}
            </h3>
            <p className="text-gray-800 text-base">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
