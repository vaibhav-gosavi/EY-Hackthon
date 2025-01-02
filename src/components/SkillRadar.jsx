import React from 'react';

const SkillRadar = ({ skills }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Skill Analysis</h3>
      <div className="relative h-64">
        <div className="absolute inset-0 flex items-center justify-center">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="absolute"
              style={{
                transform: `rotate(${(360 / skills.length) * index}deg) translateY(-50%)`,
                transformOrigin: 'center center',
              }}
            >
              <div
                className="h-2 bg-indigo-600 rounded"
                style={{
                  width: `${skill.level * 20}%`,
                  maxWidth: '100px',
                }}
              />
              <span className="text-sm text-gray-600 mt-1">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillRadar;
