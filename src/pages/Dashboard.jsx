import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SkillRadar from '../components/SkillRadar';
import AchievementCard from '../components/AchievementCard';
import CareerCoPilot from '../components/CareerCoPilot';

const mockSkills = [
  { name: 'JavaScript', level: 5, category: 'Programming' },
  { name: 'React', level: 4, category: 'Framework' },
  { name: 'UI/UX', level: 3, category: 'Design' },
  { name: 'Python', level: 4, category: 'Programming' },
  { name: 'Data Analysis', level: 3, category: 'Analytics' },
];

const mockAchievements = [
  {
    id: '1',
    name: 'Code Warrior',
    description: 'Complete 5 coding challenges',
    icon: 'trophy',
    unlockedAt: new Date(),
  },
  {
    id: '2',
    name: 'Learning Pioneer',
    description: 'Finish your first learning path',
    icon: 'book',
  },
];

export default function Dashboard() {
  const { t } = useTranslation();
  const [showCoPilot, setShowCoPilot] = useState(true);

  return (
    <>
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t('welcome.greeting', { name: 'Alex' })}
          </h1>
          <p className="text-gray-600">{t('welcome.subtitle')}</p>
        </div>

        {/* Toggle Button for Career Co-Pilot */}
        {/* <button
          onClick={() => setShowCoPilot((prev) => !prev)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {showCoPilot ? 'Hide Co-Pilot' : 'Show Co-Pilot'}
        </button> */}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SkillRadar skills={mockSkills} />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{t('achievements.title')}</h3>
          {mockAchievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>

      {/* Career Co-Pilot Component */}
      {showCoPilot && <CareerCoPilot />}
    </>
  );
}
