import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { User, Mail, MapPin, BookOpen } from 'lucide-react';

const mockUserData = {
  name: 'Alex Johnson',
  email: 'alex@example.com',
  location: 'San Francisco, CA',
  education: 'Computer Science, Stanford University',
  careerGoals: ['Full Stack Developer', 'AI/ML Engineer'],
  points: 1200, // Added a default value for points
};

export default function Profile() {
  const { t } = useTranslation();
  const { logout } = useAuth();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="text-gray-600">Manage your account and preferences</p>
      </header>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{mockUserData.name}</h2>
            <p className="text-gray-600">{mockUserData.points} XP Points</p>
          </div>
        </div>

        <div className="grid gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Mail className="w-5 h-5 mr-3" />
            {mockUserData.email}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-3" />
            {mockUserData.location}
          </div>
          <div className="flex items-center text-gray-600">
            <BookOpen className="w-5 h-5 mr-3" />
            {mockUserData.education}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Career Goals</h3>
          <div className="flex flex-wrap gap-2">
            {mockUserData.careerGoals.map((goal) => (
              <span
                key={goal}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full"
              >
                {goal}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="flex-1 py-2 px-4 bg-indigo-600 text-white rounded-lg hover-indigo-700 transition-colors">
            Edit Profile
          </button>
          <button
            onClick={logout}
            className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover-gray-50 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
