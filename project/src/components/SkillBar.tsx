import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
}

interface SkillBarProps {
  skill: Skill;
  delay: number;
  isDarkMode: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay, isDarkMode }) => {
  const { ref, isInView } = useInView({ threshold: 0.1, once: true });
  
  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          {skill.icon}
          <span className={`font-semibold ${isDarkMode ? 'text-gray-100' : 'text-slate-800'}`}>
            {skill.name}
          </span>
        </div>
        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
          {skill.level}%
        </span>
      </div>
      
      <div className={`h-2.5 ${isDarkMode ? 'bg-gray-700' : 'bg-slate-100'} rounded-full overflow-hidden`}>
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
          style={{ 
            width: isInView ? `${skill.level}%` : '0%',
            transition: `width 1s ease-out ${delay}s`
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;