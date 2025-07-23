import React from 'react';
import { useInView } from '../hooks/useInView';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

interface ResumeProps {
  id: string;
  isDarkMode: boolean;
}

const Resume: React.FC<ResumeProps> = ({ id, isDarkMode }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const workExperience = [
    {
      title: 'Freelancing',
      company: 'Nsvsr',
      period: '2025',
      description:
        'Worked on client-based projects, delivered custom solutions, and supported early-stage startups with R&D and development tasks.',
    },
    {
      title: 'Internships & Collaborations',
      period: '2024 - 2025',
      company:'Seed-stage startups',
      description:
        'Completed internships and contributed to seed-stage startups by assisting in technical development, prototyping, and R&D efforts.',
    },
    {
      title: 'Exploring Financial Markets',
      company: 'Self-Initiated ',
      period: '2022 - 2024',
      description:'After graduation, I explored financial markets, which sparked my interest in software development. This led me to learn Python and start building tech-driven software solutions.',
    },
  ];

  const education = [
    {
      degree: 'B.Tech',
      institution: 'Geethanjali College of Engineering and Technology',
      period: '2018 - 2022',
    },
    {
      degree: 'MPC(12th)',
      institution: 'Narayana Junior College',
      period: '2018',
    },
  ];

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${isDarkMode ? 'bg-gray-800' : 'bg-slate-50'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className={`transition-all duration-700 transform ${
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Resume
              </span>
            </h2>
            <p
              className={`${
                isDarkMode ? 'text-gray-300' : 'text-slate-600'
              } text-center mb-12 max-w-2xl mx-auto`}
            >
              A brief overview of my professional experience and education.
              Download my full CV for a complete picture.
            </p>

            <div className="flex justify-center mb-12">
              <a
                href="https://drive.google.com/file/d/1Q5lo5LgJobhxezMrQrVM5coqiX2Nbuqb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                <Download size={18} />
                Download Full CV
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Work Experience */}
              <div
                className={`w-full md:w-1/2 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } rounded-xl shadow-sm p-6 md:p-8 transition-transform duration-500 hover:shadow-md`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 ${
                      isDarkMode ? 'bg-gray-600' : 'bg-indigo-100'
                    } rounded-full`}
                  >
                    <Briefcase
                      size={24}
                      className={
                        isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                      }
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      isDarkMode ? 'text-gray-100' : 'text-slate-800'
                    }`}
                  >
                    Work Experience
                  </h3>
                </div>

                <div className="space-y-6">
                  {workExperience.map((job, index) => (
                    <div
                      key={index}
                      className={`relative pl-6 ${
                        isDarkMode ? 'border-gray-600' : 'border-indigo-100'
                      } border-l-2 pb-6 last:pb-0`}
                    >
                      <div className="absolute w-3 h-3 bg-indigo-500 rounded-full left-[-7px] top-1.5"></div>
                      <h4
                        className={`text-lg font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-slate-800'
                        }`}
                      >
                        {job.title}
                      </h4>
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={
                            isDarkMode ? 'text-indigo-400' : 'text-indigo-600'
                          }
                        >
                          {job.company}
                        </span>
                        <span
                          className={`text-sm ${
                            isDarkMode ? 'text-gray-400' : 'text-slate-500'
                          }`}
                        >
                          {job.period}
                        </span>
                      </div>
                      <p
                        className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-slate-600'
                        }`}
                      >
                        {job.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div
                className={`w-full md:w-1/2 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                } rounded-xl shadow-sm p-6 md:p-8 transition-transform duration-500 hover:shadow-md`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-2 ${
                      isDarkMode ? 'bg-gray-600' : 'bg-purple-100'
                    } rounded-full`}
                  >
                    <GraduationCap
                      size={24}
                      className={
                        isDarkMode ? 'text-purple-400' : 'text-purple-600'
                      }
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold ${
                      isDarkMode ? 'text-gray-100' : 'text-slate-800'
                    }`}
                  >
                    Education
                  </h3>
                </div>

                <div className="space-y-6 mb-8">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className={`relative pl-6 ${
                        isDarkMode ? 'border-gray-600' : 'border-purple-100'
                      } border-l-2 pb-6 last:pb-0`}
                    >
                      <div className="absolute w-3 h-3 bg-purple-500 rounded-full left-[-7px] top-1.5"></div>
                      <h4
                        className={`text-lg font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-slate-800'
                        }`}
                      >
                        {edu.degree}
                      </h4>
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={
                            isDarkMode ? 'text-purple-400' : 'text-purple-600'
                          }
                        >
                          {edu.institution}
                        </span>
                        <span
                          className={`text-sm ${
                            isDarkMode ? 'text-gray-400' : 'text-slate-500'
                          }`}
                        >
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div
                  className={`border-t ${
                    isDarkMode ? 'border-gray-600' : 'border-slate-100'
                  } pt-6`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 ${
                        isDarkMode ? 'bg-gray-600' : 'bg-orange-100'
                      } rounded-full`}
                    >
                      <Award
                        size={20}
                        className={
                          isDarkMode ? 'text-orange-400' : 'text-orange-500'
                        }
                      />
                    </div>
                    <h3
                      className={`text-lg font-bold ${
                        isDarkMode ? 'text-gray-100' : 'text-slate-800'
                      }`}
                    >
                      Certifications
                    </h3>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span
                        className={
                          isDarkMode ? 'text-gray-300' : 'text-slate-700'
                        }
                      >
                        Python for Everybody – Coursera (University of Michigan)
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span
                        className={
                          isDarkMode ? 'text-gray-300' : 'text-slate-700'
                        }
                      >
                        Advanced Python Programming – Infosys Springboard
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span
                        className={
                          isDarkMode ? 'text-gray-300' : 'text-slate-700'
                        }
                      ></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
