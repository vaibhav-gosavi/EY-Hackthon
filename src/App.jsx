import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation';
import SkillRadar from './components/SkillRadar';
import AchievementCard from './components/AchievementCard';
import CareerCoPilot from './components/CareerCoPilot';

const mockSkills = [
  { name: 'JavaScript', level, category: 'Programming' },
  { name: 'React', level, category: 'Framework' },
  { name: 'UI/UX', level, category: 'Design' },
  { name: 'Python', level, category: 'Programming' },
  { name: 'Data Analysis', level, category: 'Analytics' },
];

const mockAchievements = [
  {
    id: '1',
    name: 'Code Warrior',
    description: 'Complete 5 coding challenges',
    icon: 'trophy',
    unlockedAt Date(),
  },
  {
    id: '2',
    name: 'Learning Pioneer',
    description: 'Finish your first learning path',
    icon: 'book',
  },
];

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="md-64 p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {t('welcome.greeting', { name: 'Alex' })}
            </h1>
            <p className="text-gray-600">{t('welcome.subtitle')}</p>
          </header>

          <div className="grid grid-cols-1 md-cols-2 lg-cols-3 gap-6">
            <div className="lg-span-2">
              <SkillRadar skills={mockSkills} />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{t('achievements.title')}</h3>
              {mockAchievements.map((achievement) => (
                <AchievementCard key={achievement.id} achievement={achievement} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <CareerCoPilot />
    </div>
  );
}

export default App;