import { useTranslation } from 'react-i18next';
import { BookOpen, Clock, DollarSign, Star } from 'lucide-react';

const mockCourses = [
  {
    id: '1',
    title: 'Full Stack Development',
    provider: 'Tech Academy',
    duration: '12 weeks',
    cost: 500, // Added a sample cost value
    rating: 4.8, // Corrected the rating value
    skillsTargeted: ['JavaScript', 'React', 'Node.js'],
  },
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    provider: 'Design School',
    duration: '8 weeks',
    cost: 300, // Added a sample cost value
    rating: 4.6, // Corrected the rating value
    skillsTargeted: ['Figma', 'UI Design', 'User Research'],
  },
];

export default function LearningPaths() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Learning Paths</h1>
        <p className="text-gray-600">Discover courses tailored to your career goals</p>
      </header>

      <div className="grid gap-6 md-cols-2">
        {mockCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.provider}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                {course.duration}
              </div>
              <div className="flex items-center text-gray-600">
                <DollarSign className="w-4 h-4 mr-2" />
                ${course.cost}
              </div>
              <div className="flex items-center text-gray-600">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                {course.rating}
              </div>
              <div className="flex items-center text-gray-600">
                <BookOpen className="w-4 h-4 mr-2" />
                {course.skillsTargeted.length} skills
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {course.skillsTargeted.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover-indigo-700 transition-colors">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
