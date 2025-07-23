import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  isEven: boolean;
  delay: number;
  isDarkMode: boolean;
  onProjectClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isEven,
  delay,
  isDarkMode,
  onProjectClick,
}) => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isEven ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-8 md:gap-12`}
      style={{
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
        transform: isInView
          ? 'translateY(0) scale(1)'
          : 'translateY(50px) scale(0.95)',
        opacity: isInView ? 1 : 0,
      }}
    >
      {/* Project Image */}
      <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg shadow-lg group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`text-xs px-2 py-1 ${
                  isDarkMode ? 'bg-indigo-500/70' : 'bg-indigo-600/70'
                } rounded-full`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="w-full md:w-1/2">
        <div className="p-4">
          <h3
            className={`text-2xl font-bold ${
              isDarkMode ? 'text-gray-100' : 'text-gray-800'
            } mb-4`}
          >
            {project.title}
          </h3>
          <p
            className={`${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            } mb-6 leading-relaxed`}
          >
            {project.description}
          </p>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onProjectClick(project);
            }}
            className={`inline-flex items-center gap-2 ${
              isDarkMode
                ? 'text-indigo-400 hover:text-indigo-300'
                : 'text-indigo-600 hover:text-indigo-800'
            } font-medium transition-colors group`}
          >
            View Project Details
            <ExternalLink
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
