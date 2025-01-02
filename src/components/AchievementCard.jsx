import React from 'react';
import { Trophy } from 'lucide-react';

const AchievementCard = ({ achievement }) => {
  const isUnlocked = !!achievement.unlockedAt;

  return (
    <div
      className={`relative p-4 rounded-lg ${
        isUnlocked ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : 'bg-gray-100'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`p-2 rounded-full ${
            isUnlocked ? 'bg-white/20' : 'bg-gray-200'
          }`}
        >
          <Trophy
            className={`w-6 h-6 ${
              isUnlocked ? 'text-white' : 'text-gray-400'
            }`}
          />
        </div>
        <div>
          <h4
            className={`font-semibold ${
              isUnlocked ? 'text-white' : 'text-gray-700'
            }`}
          >
            {achievement.name}
          </h4>
          <p
            className={`text-sm ${
              isUnlocked ? 'text-white/80' : 'text-gray-500'
            }`}
          >
            {achievement.description}
          </p>
        </div>
      </div>
      {isUnlocked && (
        <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
          Unlocked!
        </div>
      )}
    </div>
  );
};

export default AchievementCard;
