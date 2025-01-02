import { useTranslation } from 'react-i18next';
import AchievementCard from '../components/AchievementCard';

const mockAchievements = [
  {
    id: '1',
    name: 'Code Warrior',
    description: 'Complete 5 coding challenges',
    icon: 'trophy',
    unlockedAt: new Date(), // Corrected syntax for date initialization
  },
  {
    id: '2',
    name: 'Learning Pioneer',
    description: 'Finish your first learning path',
    icon: 'book',
  },
  {
    id: '3',
    name: 'Team Player',
    description: 'Collaborate on 3 group projects',
    icon: 'users',
    unlockedAt: new Date(), // Corrected syntax for date initialization
  },
  {
    id: '4',
    name: 'Problem Solver',
    description: 'Solve 10 algorithmic challenges',
    icon: 'puzzle',
  },
];

export default function Achievements() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">{t('achievements.title')}</h1>
        <p className="text-gray-600">Track your progress and unlock new achievements</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockAchievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
