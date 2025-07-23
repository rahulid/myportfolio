import React from 'react';
import { X, Github, ExternalLink, Calendar, Users, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
  duration?: string;
  teamSize?: string;
  githubUrl?: string;
  liveUrl?: string;
  screenshots?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  isDarkMode,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } animate-fade-in-up`}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-inherit rounded-t-2xl">
          <h2
            className={`text-2xl font-bold ${
              isDarkMode ? 'text-gray-100' : 'text-gray-800'
            }`}
          >
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${
              isDarkMode
                ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-200'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800'
            }`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Duration */}
            <div
              className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} className="text-indigo-500" />
                <h3
                  className={`font-semibold ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}
                >
                  Duration
                </h3>
              </div>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                {project.duration || '1 month'}
              </p>
            </div>

            {/* Team Size */}
            <div
              className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Users size={20} className="text-purple-500" />
                <h3
                  className={`font-semibold ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}
                >
                  Team Size
                </h3>
              </div>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                {project.teamSize || 'Solo Project'}
              </p>
            </div>

            {/* Status */}
            <div
              className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Star size={20} className="text-yellow-500" />
                <h3
                  className={`font-semibold ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}
                >
                  Status
                </h3>
              </div>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Completed
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              }`}
            >
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    isDarkMode
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                      : 'bg-indigo-100 text-indigo-700 border border-indigo-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              }`}
            >
              Project Overview
            </h3>
            <p
              className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              }`}
            >
              Key Features
            </h3>
            <ul className="space-y-3">
              {(
                project.features || [
                  'Real-time data processing and analysis',
                  'Interactive user interface with responsive design',
                  'Automated reporting and notifications',
                  'Scalable architecture for future enhancements',
                ]
              ).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                  <span
                    className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges & Solutions */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              }`}
            >
              Challenges & Solutions
            </h3>
            <ul className="space-y-3">
              {(
                project.challenges || [
                  'Optimizing performance for large datasets - Implemented efficient data structures and caching mechanisms',
                  'Ensuring cross-browser compatibility - Used modern web standards and thorough testing',
                  'Managing complex state - Implemented proper state management patterns',
                ]
              ).map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span
                    className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}
                  >
                    {challenge}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h3
              className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              }`}
            >
              Results & Impact
            </h3>
            <ul className="space-y-3">
              {(
                project.outcomes || [
                  'Successfully delivered project on time and within scope',
                  'Improved data processing efficiency by 40%',
                  'Enhanced user experience with intuitive interface design',
                  'Gained valuable experience in modern development practices',
                ]
              ).map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span
                    className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}
                  >
                    {outcome}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <a
              href={project.githubUrl || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}
            >
              <Github size={20} />
              View Source Code
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
              >
                <ExternalLink size={20} />
                View Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
