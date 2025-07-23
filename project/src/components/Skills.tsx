import React from 'react';
import { useInView } from '../hooks/useInView';
import {
  Server,
  LineChart,
  GitBranch,
  Monitor,
  Cloud,
  BrainCircuit,
  Database,
  Camera,
  Bot,
  BarChart3,
  Layout,
  Zap,
  TrendingUp,
  Shield,
  Wrench,
} from 'lucide-react';

interface SkillsProps {
  id: string;
  isDarkMode: boolean;
}

import PythonIcon from '../assets/python-svgrepo-com.svg?react';
import SqlIcon from '../assets/sql-database-generic-svgrepo-com.svg?react';
import OpencvIcon from '../assets/selenium-svgrepo-com.svg?react';
import CvIcon from '../assets/opencv.svg?react';
import Dicons from '../assets/pandasnumpy.svg?react';
import InterfaceIcon from '../assets/InterfaceIcon.svg?react';
import Bilogo from '../assets/powerbi.svg?react';
import Apilogo from '../assets/api_websocket.svg?react';
import Gitlogo from '../assets/githublogo.svg?react';
import Micon from '../assets/machinelogo.svg?react';
import Dataicon from '../assets/datalogo.svg?react';
import Ailogo from '../assets/aiimagelogo.svg?react';

const Skills: React.FC<SkillsProps> = ({ id, isDarkMode }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const technologies = [
    {
      name: 'Python',
      icon: <PythonIcon className="w-20 h-20 text-blue-500" />,
      description:
        'Proficient in Python for automation, data analysis, ML basics, and building desktop apps.',
    },
    {
      name: 'SQL/Database',
      icon: <SqlIcon className="w-20 h-20 text-blue-500" />, // Keep Lucide for generic database
      description:
        'Experience in designing and querying relational databases for structured data handling.',
    },
    {
      name: 'pandas/numpy',

      icon: <Dicons className="w-20 h-20 text-blue-500" />,
      description:
        'Advanced data manipulation, analysis, and processing for trading algorithms and sales analytics.',
    },
    {
      name: 'OpenCV (Computer Vision)',

      icon: <CvIcon className="w-20 h-20 text-blue-500" />,
      description:
        'Applied in real-time car number plate recognition and video processing projects.',
    },
    {
      name: 'GUI (TKinter)',

      icon: <InterfaceIcon className="w-20 h-20 text-blue-500" />,
      description:
        'Desktop application development with interactive dashboards and user interfaces.',  

    },
    {
      name: 'PowerBi',

      icon: <Bilogo className="w-20 h-20 text-blue-500" />,
      description:
        'Business intelligence and data visualization for sales analytics and performance dashboards.',    
    },
    {
      name: 'API Integration & Websocket',

      icon: <Apilogo className="w-20 h-20 text-blue-500" />,
      description:
        'WebSocket and REST API integration for real-time data processing and broker connectivity.',

    },
    {
      name: 'Git/GitHub',
 
      icon: <Gitlogo className="w-20 h-20 text-blue-500" />,
      description:
        'Version control, project collaboration, and portfolio deployment on GitHub.',
  
    },
    {
      name: 'Machine Learning',

      icon: <Micon className="w-20 h-20 text-blue-500" />,
      description:
        'Applied ML basics in predictive modeling and real-time data analysis.',

    },
    {
      name: 'Data Analytics',

      icon: <Dataicon className="w-20 h-20 text-blue-500" />,
      description:
        'Analyzed datasets for trends and patterns using Python and visualization tools.',

    },
    {
      name: 'Selenium Automation',

      icon: <OpencvIcon className="w-20 h-20 text-orange-500" />,
      description:
        'Automated web tasks like WhatsApp messaging using Selenium and PyAutoGUI.',
  
    },
    {
      name: 'AI Tool Proficiency',

      icon: <Ailogo className="w-20 h-20 text-blue-500" />,
      description:
        'Efficient use of AI tools to speed up development and creativity.', 
    },
  ];

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-700 transform ${
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Skills & Technologies
              </span>
            </h2>
            <p
              className={`${
                isDarkMode ? 'text-gray-300' : 'text-slate-600'
              } text-center mb-12 max-w-2xl mx-auto`}
            >
              I believe learning is a continuous process. Throughout my
              professional career, I’ve embraced a variety of technologies based
              on project needs to consistently deliver quality outcomes. Here
              are some of the skills and tools I’ve acquired over time.
            </p>

            {/* Flip Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flip-card h-48 perspective-1000"
                  style={{
                    transition: `all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                      index * 0.1
                    }s`,
                    transform: isInView
                      ? 'translateY(0) scale(1)'
                      : 'translateY(30px) scale(0.9)',
                    opacity: isInView ? 1 : 0,
                  }}
                >
                  <div className="flip-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
                    {/* Front Side */}
                    <div
                      className={`flip-card-front absolute inset-0 w-full h-full backface-hidden rounded-xl ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600'
                          : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                      } border shadow-lg flex flex-col items-center justify-center p-6 group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <div className="mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce animate-enhanced-float">
                        <div className="text-4xl">{tech.icon}</div>
                      </div>

                      <h3
                        className={`text-lg font-bold text-center ${
                          isDarkMode ? 'text-gray-100' : 'text-gray-800'
                        } mb-4`}
                      >
                        {tech.name}
                      </h3>

                      <div
                        className={`text-sm ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        } text-center opacity-75`}
                      >
                        {tech.projects}
                      </div>
                    </div>

                    {/* Back Side */}
                    <div
                      className={`flip-card-back absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl ${
                        isDarkMode
                          ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border-indigo-600'
                          : 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200'
                      } border shadow-xl flex flex-col justify-center p-6`}
                    >
                      <div className="text-center mb-4">
                        <div className="text-2xl mb-2">{tech.icon}</div>
                        <h3
                          className={`text-lg font-bold ${
                            isDarkMode ? 'text-white' : 'text-gray-800'
                          }`}
                        >
                          {tech.name}
                        </h3>
                      </div>

                      <p
                        className={`text-sm ${
                          isDarkMode ? 'text-gray-200' : 'text-gray-700'
                        } text-center leading-relaxed mb-4`}
                      >
                        {tech.description}
                      </p>

                      <div className="flex justify-between items-center">
                        <div
                          className={`text-xs ${
                            isDarkMode ? 'text-indigo-300' : 'text-indigo-600'
                          } font-semibold`}
                        >
                          {tech.projects}
                        </div>
                        <div
                          className={`text-xs ${
                            isDarkMode ? 'text-purple-300' : 'text-purple-600'
                          } font-semibold`}
                        >
                          {tech.level}
                        </div>
                      </div>

                      {/* Skill Level Bar */}
                      <div
                        className={`mt-3 h-2 ${
                          isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                        } rounded-full overflow-hidden`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className={`mt-16 ${
                isDarkMode ? 'bg-gray-800' : 'bg-indigo-50'
              } rounded-xl p-6 md:p-8 shadow-sm`}
            >
              <h3
                className={`text-xl font-bold ${
                  isDarkMode ? 'text-gray-100' : 'text-slate-800'
                } mb-4`}
              >
                Additional Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Financial Markets',
                  'Mongodb',
                  'DSA : Arrays, Linked Lists, Stacks, Queues, Sorting Algorithms',
                  'OOPs : Classes, Inheritance, Polymorphism, Encapsulation, Abstraction',
                  'PyTesseract (OCR)',
                  'PyAutoGUI',
                  'Image Processing',
                  'Data Cleaning & Analysis',
                  'Real-time Data Processing',
                  'GUI Development',
                  'Browser Automation',
                  'Sentiment Analysis',
                  'Excel Integration',
                  'ChromeDriver',
                  'Pickle Serialization',
                  'Performance Optimization',
                  'System Design',
                  'and more...',
                ].map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 ${
                      isDarkMode
                        ? 'bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600'
                        : 'bg-white text-slate-700 border-indigo-100 hover:bg-indigo-50'
                    } border rounded-full text-sm shadow-sm transition-colors duration-300 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
