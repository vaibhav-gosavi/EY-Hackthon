import React from 'react';

export default function CareerInsights() {
  const insights = [
    { role: 'Frontend Developer', trend: '⬆ 15% demand increase', skills: ['React', 'CSS', 'JavaScript'], companies: ['Google', 'Facebook', 'Amazon'] },
    { role: 'Data Scientist', trend: '⬆ 20% demand increase', skills: ['Python', 'Machine Learning', 'SQL'], companies: ['Microsoft', 'IBM', 'Tesla'] },
    { role: 'Cloud Engineer', trend: '⬆ 18% demand increase', skills: ['AWS', 'Docker', 'Kubernetes'], companies: ['AWS', 'Azure', 'Google Cloud'] },
    { role: 'UI/UX Designer', trend: '⬆ 12% demand increase', skills: ['Figma', 'Adobe XD', 'Prototyping'], companies: ['Airbnb', 'Spotify', 'Dribbble'] },
  ];

  return (
    <div className="p-4 space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">Career Insights</h2>
        <p className="text-gray-600">Explore trends, skills, and opportunities in your desired field.</p>
      </div>

      {/* Career Trends Section */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-600">Trending Roles</h3>
        <ul className="space-y-4 mt-4">
          {insights.map((insight) => (
            <li key={insight.role} className="p-4 bg-indigo-50 rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-gray-800">{insight.role}</h4>
              <p className="text-gray-600">{insight.trend}</p>
              <div className="mt-2">
                <strong className="block text-sm font-medium text-gray-700">Required Skills:</strong>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {insight.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </ul>
              </div>
              <div className="mt-2">
                <strong className="block text-sm font-medium text-gray-700">Top Companies Hiring:</strong>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {insight.companies.map((company) => (
                    <span key={company} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {company}
                    </span>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Resources Section */}
      <div>
        <h3 className="text-2xl font-semibold text-indigo-600">Resources for Career Growth</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
          <li>
            <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              Coursera - Top Courses for Skill Development
            </a>
          </li>
          <li>
            <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              Udemy - Industry-Specific Training
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              LinkedIn Learning - Professional Growth
            </a>
          </li>
          <li>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              GitHub - Collaborative Open-Source Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
