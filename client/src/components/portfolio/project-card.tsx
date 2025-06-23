import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="project-card bg-white rounded-2xl shadow-sm hover:shadow-lg cursor-pointer overflow-hidden"
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
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
          initial={{ y: "100%" }}
          whileHover={{ 
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          <h3 className="text-white font-semibold text-xl mb-2">
            {project.title}
          </h3>
          <p className="text-gray-200 text-sm">
            {project.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
