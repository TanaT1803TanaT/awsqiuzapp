import React from 'react';
import { QuizQuestion } from '../data/quizData';

interface QuizCardProps {
  question: QuizQuestion;
  selectedAnswer: string | null;
  onSelectAnswer: (answerId: string) => void;
  showResult: boolean;
  questionNumber?: number;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult,
  questionNumber
}) => {
  const getOptionClassName = (optionId: string) => {
    if (!showResult) {
      return selectedAnswer === optionId
        ? 'bg-blue-100 border-blue-500'
        : 'bg-white hover:bg-gray-50';
    }

    if (optionId === question.correctAnswer) {
      return 'bg-green-100 border-green-500';
    }

    if (selectedAnswer === optionId && optionId !== question.correctAnswer) {
      return 'bg-red-100 border-red-500';
    }

    return 'bg-white opacity-70';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-start mb-4">
        <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
          {questionNumber || question.id}
        </span>
        <h3 className="text-lg font-medium text-gray-900">{question.question}</h3>
      </div>
      
      <div className="space-y-3 mt-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => !showResult && onSelectAnswer(option.id)}
            disabled={showResult}
            className={`w-full text-left p-3 border-2 rounded-md transition-colors duration-200 flex items-center ${getOptionClassName(option.id)}`}
          >
            <span className="bg-gray-200 text-gray-800 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
              {option.id}
            </span>
            <span>{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;