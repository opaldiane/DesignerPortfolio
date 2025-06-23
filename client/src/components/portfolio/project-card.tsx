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
        
        <motion.div
          className="absolute inset-0 bg-white/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ 
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <div className="text-center px-6">
            <motion.h3 
              className="text-primary font-semibold text-xl mb-2"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ 
                y: 0, 
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut", delay: 0.1 }
              }}
            >
              {project.title}
            </motion.h3>
            <motion.p 
              className="text-text-secondary text-sm"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ 
                y: 0, 
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut", delay: 0.15 }
              }}
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
