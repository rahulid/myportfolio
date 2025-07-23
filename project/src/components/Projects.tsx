import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useInView } from '../hooks/useInView';

import HeroImage from '/src/assets/stockmarketimage.jpeg';
import Carimg from '/src/assets/carnp.webp';
import coco from '/src/assets/cocoimg.webp';
import bot from '/src/assets/aautobot.webp';

interface ProjectsProps {
  id: string;
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ id, isDarkMode }) => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedProject, setSelectedProject] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Real-Time Stock Sentiment Analyzer & Algorithmic Trading System',
      description:
        'An end-to-end advanced algorithmic trading system that analyzes live market data, detects trends and sentiment, and places real-time orders based on predictive logic.',
      image: HeroImage,
      technologies: [
        'Python',
        'Websocket & APIs',
        'Pandas',
        'NumPy',
        'Tkinter',
        'Pickle',
        'openpyxl',
        'PyInstaller',
      ],
      link: 'https://github.com',
      detailedDescription:
        'This project is a smart trading bot built with Python that acts like a real-time decision-maker in the stock market. It connects to live data through broker APIs and websockets, analyzes stock sentiment using technical indicators, and places buy/sell orders instantly — just like a human trader, but faster and more accurate. It also tracks profits, stores trade history, and even has a GUI for user interaction. Designed for automation and performance, this tool brings together logic, prediction, and real-world trading.',

      features: [
        'Real-time market data processing from multiple exchanges',
        'Unique candle-based trading strategy crafted from scratch',
        'GUI dashboard built with Tkinter for manual overrides and status display',
        'Automated trading execution with risk management controls',
        'Interactive dashboard for monitoring performance and analytics',
        'Modular design for easy rule adjustments and backtesting',
      ],
      challenges: [
        'Handling high-frequency data streams.',
        'Improved trading speed, consistency, and eliminated emotional decision-making.',
        'Managing risk in volatile markets - Developed comprehensive risk management algorithms',
      ],
      outcomes: [
        'Successfully processed over multiple data points per second',
        'Achieved improvement in trading accuracy compared to baseline strategies',
        'Reduced manual trading time by 80% through automation',
        'Built scalable system handling multiple trading pairs simultaneously',
      ],
      duration: 'Project-based | Multiple Clients',
      teamSize: 'Solo Project',
      githubUrl: 'https://github.com',
      liveUrl: null,
    },
    {
      id: 2,
      title: 'Car Number Plate Recognition System',
      description:
        'Recognizes vehicle number plates from images or video using Python, OpenCV, and OCR to log and process plate information efficiently.',
      image:
        Carimg,
      technologies: ['Python', 'Cv2', 'numpy', 'PyTesseract'],
      link: 'https://github.com',
      detailedDescription:
        'This project focuses on identifying and extracting vehicle number plates using computer vision. Leveraging Python and OpenCV for image processing and PyTesseract for OCR, the system detects number plates from both static images and real-time video streams. The extracted text is then logged and can be used for basic tracking, record maintenance, or entry systems. It simulates real-world use cases like parking lot monitoring, gate access control, and toll management.',
      features: [
        'Real-time plate detection and text extraction',
        'Accurate results in low-light and angled conditions',
        'Optimized with noise reduction and image preprocessing',
      ],
      challenges: [
        'Gained hands-on experience with Python libraries like OpenCV and Tesseract.',
        'Strengthened understanding of basic ML and image processing techniques',
        'Served as a foundation for exploring advanced machine learning projects.',
      ],
      outcomes: [
        'Although I was aware of advanced ML models like YOLO, I intentionally used traditional OpenCV techniques to build a stronger foundational understanding.',
        'lenges with poor image quality affecting recognition accuracy — solved using image preprocessing like grayscale conversion, noise reduction, and adaptive thresholding',
        'Dealt with inconsistent lighting and shadows by applying contrast enhancement techniques and edge detection for better plate visibility.',
      ],
    },
    {
      id: 3,
      title: 'Chocolate Sales Dashboard & Analysis',
      description:
        'Performed in-depth analysis on chocolate sales data using Python to uncover sales trends, product performance, and revenue insights.',
      image:
        coco,
      technologies: ['Python', 'Excel', 'SQL', 'PowerBI'],
      link: 'https://github.com',
      detailedDescription:
        'his project involved a comprehensive analysis of chocolate sales data using Python. I extracted and processed raw data to identify trends in product performance, seasonal sales patterns, and customer buying behavior. By applying data cleaning, aggregation, and visualization techniques, I derived actionable insights that could help optimize marketing strategies and inventory planning. Though the project was executed using Python, I’m open and prepared to translate this analysis into a Power BI dashboard if future needs call for interactive reporting.',
      features: [
        'Real-time filtering by region, product type, and time period',
        'Intelligent keyword and phrase extraction',
        'Drill-down capability to analyze trends at category and product level',
        'KPIs showing Total Sales, Profit, and Quantity Sold',
      ],
      challenges: [
        'Simplified complex metrics into easy-to-understand visuals.',
        'Faced inconsistent, messy raw data — handled, merged, and cleaned it effectively.',
        'Helped identify underperforming regions and top-selling products',
      ],
      outcomes: [
        'Enabled faster business decisions by visualizing hidden patterns in sales',
        'Improved understanding of customer preferences and seasonal demand',
        "Got a clear picture of profit & loss and the company's overall stage",
      ],
    },
    {
      id: 4,
      title: 'WhatsApp-Based Customer Support Automation',
      description:
        'Built an automated WhatsApp system for a medical store to reply instantly to customer medicine queries using Python and Selenium.',
      image:
        bot,
      technologies: ['Python', 'Selenium', 'PyAutoGUI', 'ChromeDriver'],
      link: 'https://github.com',
      detailedDescription:
        'To help a medical store owner manage increasing customer queries efficiently, I developed a WhatsApp automation system that acts like a virtual assistant. It intelligently listens to incoming messages, understands medicine-related questions, and instantly responds with brand names and availability from a structured inventory — all via WhatsApp Web. This solution streamlined customer communication without needing extra staff and proved highly effective in a real-time local environment.While the system wasn’t deployed due to practical cost considerations, the project significantly strengthened my skills in automation.',
      features: [
        'Automates replies to WhatsApp messages based on inventory data.',
        'Parses and understands customer medicine-related queries.',
        'Budget planning with predictive spending models',
        'Custom financial goal tracking and alerts',
        'Secure bank account integration for automatic data import',
        'Detailed financial reports and insights',
      ],
      challenges: [
        'Faced ChromeDriver version mismatches during testing; resolved by integrating driver-manager to auto-sync versions.',
        'Continuous cloud deployment was expensive; kept as a local prototype and advised client to opt for external services',
      ],
      outcomes: [
        'Saved hours of repetitive manual messaging.',
        'Delivered messages instantly with 100% accuracy.',
        'Gained strong hands-on experience in automation, browser scripting, and user-centric design.',
      ],
    },
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
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
                Featured Projects
              </span>
            </h2>
            <p
              className={`${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              } text-center mb-12 max-w-2xl mx-auto`}
            >
              Each of these projects highlights my ability to design intelligent
              systems—from automating workflows to deploying machine learning
              models. They demonstrate both my technical foundation and
              real-world application skills, with a strong focus on real-world
              functionality and continuous learning.
            </p>

            <div className="space-y-20 mt-12">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isEven={index % 2 === 1}
                  delay={index * 0.2}
                  isDarkMode={isDarkMode}
                  onProjectClick={handleProjectClick}
                />
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                } rounded-full font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                View More on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          isDarkMode={isDarkMode}
        />
      </div>
    </section>
  );
};

export default Projects;
