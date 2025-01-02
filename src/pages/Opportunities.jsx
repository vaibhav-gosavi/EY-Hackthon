import { useTranslation } from 'react-i18next';
import { Building, MapPin, Clock, Briefcase } from 'lucide-react';

const mockOpportunities = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    duration: '3 months',
    type: 'Internship',
    skills: ['React', 'JavaScript', 'CSS'],
    description:
      'Join our team to build modern web applications using React and related technologies.',
  },
  {
    id: '2',
    title: 'UI/UX Design Project',
    company: 'Creative Studio',
    location: 'Hybrid',
    duration: '6 weeks',
    type: 'Project',
    skills: ['Figma', 'User Research', 'Prototyping'],
    description: 'Help design user interfaces for our upcoming mobile application.',
  },
];

export default function Opportunities() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Opportunities</h1>
        <p className="text-gray-600">Discover internships and projects matching your skills</p>
      </header>

      <div className="space-y-6">
        {mockOpportunities.map((opportunity) => (
          <div key={opportunity.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{opportunity.title}</h3>
                <div className="flex items-center text-gray-600 mt-1">
                  <Building className="w-4 h-4 mr-2" />
                  {opportunity.company}
                </div>
              </div>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                {opportunity.type}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {opportunity.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                {opportunity.duration}
              </div>
            </div>

            <p className="text-gray-600 mb-4">{opportunity.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {opportunity.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover-indigo-700 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
