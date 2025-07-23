import React from 'react';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactProps {
  id: string;
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ id, isDarkMode }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 transform ${
              isInView
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                Get In Touch
              </span>
            </h2>
            <p
              className={`${
                isDarkMode ? 'text-gray-300' : 'text-slate-600'
              } text-center mb-12 max-w-2xl mx-auto`}
            >
              I'm actively seeking opportunities where I can contribute, grow,
              and collaborate with a forward-thinking team to build something
              truly impactful.
            </p>

            {/* Contact Information - Centered Layout */}
            <div className="flex justify-center">
              <div
                className={`w-full max-w-2xl ${
                  isDarkMode ? 'bg-gray-800' : 'bg-indigo-50'
                } rounded-xl p-8 md:p-10`}
              >
                <h3
                  className={`text-2xl font-bold ${
                    isDarkMode ? 'text-gray-100' : 'text-slate-800'
                  } mb-8 text-center`}
                >
                  Contact Information
                </h3>

                <div className="space-y-8 mb-10">
                  <div className="flex items-center gap-6 justify-center">
                    <div
                      className={`p-3 ${
                        isDarkMode ? 'bg-gray-700' : 'bg-white'
                      } rounded-full shadow-sm`}
                    >
                      <Mail size={24} className="text-indigo-600" />
                    </div>
                    <div className="text-center">
                      <h4
                        className={`text-lg font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-slate-800'
                        } mb-1`}
                      >
                        Email
                      </h4>
                      <a
                        href="mailto:rahulprema24@gmail.com"
                        className="text-indigo-600 hover:text-indigo-800 transition-colors text-lg"
                      >
                        rahulprema24@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 justify-center">
                    <div
                      className={`p-3 ${
                        isDarkMode ? 'bg-gray-700' : 'bg-white'
                      } rounded-full shadow-sm`}
                    >
                      <Phone size={24} className="text-indigo-600" />
                    </div>
                    <div className="text-center">
                      <h4
                        className={`text-lg font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-slate-800'
                        } mb-1`}
                      >
                        Phone
                      </h4>
                      <a
                        href="tel:+919849178241" 
                        className="text-indigo-600 hover:text-indigo-800 transition-colors text-lg"
                      >
                             9849178241
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 justify-center">
                    <div
                      className={`p-3 ${
                        isDarkMode ? 'bg-gray-700' : 'bg-white'
                      } rounded-full shadow-sm`}
                    >
                      <MapPin size={24} className="text-indigo-600" />
                    </div>
                    <div className="text-center"> 
                      <h4
                        className={`text-lg font-semibold ${
                          isDarkMode ? 'text-gray-100' : 'text-slate-800'
                        } mb-1`}
                      >
                        Location
                      </h4>
                      <p
                        className={`${
                          isDarkMode ? 'text-gray-300' : 'text-slate-600'
                        } text-lg`}
                      >
                        Hyderabad, Telangana.
                      </p>
                    </div>
                  </div>
                </div>

                <hr
                  className={`${
                    isDarkMode ? 'border-gray-700' : 'border-indigo-100'
                  } my-8`}
                />

                <h3
                  className={`text-xl font-bold ${
                    isDarkMode ? 'text-gray-100' : 'text-slate-800'
                  } mb-6 text-center`}
                >
                  Connect With Me
                </h3>

                <div className="flex justify-center gap-6 mb-8">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-white hover:bg-gray-50'
                    } rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 group`}
                    aria-label="GitHub Profile"
                  >
                    <Github
                      size={24}
                      className={`${
                        isDarkMode
                          ? 'text-gray-300 group-hover:text-white'
                          : 'text-slate-800 group-hover:text-slate-900'
                      } transition-colors`}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rahul-prema-b7825a341/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-white hover:bg-gray-50'
                    } rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 group`}
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin
                      size={24}
                      className="text-blue-600 group-hover:text-blue-700 transition-colors"
                    />
                  </a>
                  <a
                    href="https://Money-trust.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 ${
                      isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600'
                        : 'bg-white hover:bg-gray-50'
                    } rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 group`}
                    aria-label="Twitter Profile"
                  >
                    <Twitter
                      size={24}
                      className="text-blue-400 group-hover:text-blue-500 transition-colors"
                    />
                  </a>
                </div>

                <div
                  className={`p-4 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-indigo-100'
                  } rounded-lg text-center`}
                >
                  <p
                    className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-slate-700'
                    } leading-relaxed`}
                  >
                    <strong
                      className={
                        isDarkMode ? 'text-gray-100' : 'text-slate-800'
                      }
                    >
                      Availability:
                    </strong>{' '}
                    I’m currently available — feel free to reach out anytime via LinkedIn or email. 🤝
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;