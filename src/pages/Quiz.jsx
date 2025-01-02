import React, { useState } from 'react';

const questions = [
  {
    question: 'What is React?',
    options: ['Library', 'Framework'],
    answer: 'Library',
    explanation: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'What is JavaScript?',
    options: ['Programming Language', 'Framework'],
    answer: 'Programming Language',
    explanation: 'JavaScript is a programming language used for web development, among other things.',
  },
  {
    question: 'What is CSS used for?',
    options: ['Styling', 'Functionality'],
    answer: 'Styling',
    explanation: 'CSS (Cascading Style Sheets) is used to style the layout and design of web pages.',
  },
  {
    question: 'What is the purpose of HTML?',
    options: ['Structure', 'Style'],
    answer: 'Structure',
    explanation: 'HTML (HyperText Markup Language) provides the structure of a webpage.',
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
    setShowExplanation(true);
  };

  const handleContinue = () => {
    setShowExplanation(false);
    setCurrentQuestion((prev) => prev + 1);
    setSelectedOption('');
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-2xl font-bold">Quiz Completed!</h2>
        <p className="text-lg">Your score: {score}/{questions.length}</p>
        <p className="text-gray-600">Thank you for taking the quiz! Review the concepts and try again for a better score.</p>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">{`Question ${currentQuestion + 1} of ${questions.length}`}</h2>
      <p className="text-lg">{questions[currentQuestion].question}</p>
      <div className="space-y-2">
        {questions[currentQuestion].options.map((option) => (
          <label key={option} className="block">
            <input
              type="radio"
              name="option"
              value={option}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

      {!showExplanation ? (
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
        >
          Submit Answer
        </button>
      ) : (
        <div className="space-y-2">
          <p className="text-gray-600">{questions[currentQuestion].explanation}</p>
          <button
            onClick={handleContinue}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Continue to Next Question
          </button>
        </div>
      )}
    </div>
  );
}
