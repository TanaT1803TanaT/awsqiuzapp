import React from 'react';
import { QuizQuestion } from '../data/quizData';
import { CloudLightning } from 'lucide-react';

interface QuizResultProps {
  questions: QuizQuestion[];
  userAnswers: Record<number, string>;
  onRestart: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ questions, userAnswers, onRestart }) => {
  const correctAnswers = questions.filter(
    (q) => userAnswers[q.id] === q.correctAnswer
  ).length;
  
  const percentage = Math.round((correctAnswers / questions.length) * 100);
  
  const getResultMessage = () => {
    if (percentage >= 90) return 'すばらしい！AWSマスターレベルです！';
    if (percentage >= 70) return '良い結果です！AWSの知識が豊富です。';
    if (percentage >= 50) return 'まずまずの結果です。もう少し学習を続けましょう。';
    return 'もっと勉強が必要です。基礎から復習しましょう。';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="bg-blue-600 rounded-full p-4 inline-block mb-4">
          <CloudLightning size={48} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">クイズ結果</h2>
        <p className="text-gray-600">{getResultMessage()}</p>
      </div>
      
      <div className="flex justify-center items-center mb-8">
        <div className="w-48 h-48 rounded-full border-8 border-blue-500 flex items-center justify-center">
          <div className="text-center">
            <span className="block text-4xl font-bold text-gray-900">{percentage}%</span>
            <span className="text-gray-600">正解率</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">正解数:</span>
          <span className="font-bold">{correctAnswers} / {questions.length}</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      
      <button
        onClick={onRestart}
        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
      >
        もう一度挑戦する
      </button>
    </div>
  );
};

export default QuizResult;