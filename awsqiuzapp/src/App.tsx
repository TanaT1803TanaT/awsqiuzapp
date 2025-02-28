import React, { useState, useEffect } from 'react';
import { Cloud } from 'lucide-react';
import { quizData } from './data/quizData';
import QuizCard from './components/QuizCard';
import QuizProgress from './components/QuizProgress';
import QuizResult from './components/QuizResult';

function App() {
  const [questions, setQuestions] = useState(quizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Fisher-Yates shuffle algorithm to randomize questions
  const shuffleQuestions = () => {
    const shuffled = [...quizData];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize with shuffled questions
  useEffect(() => {
    setQuestions(shuffleQuestions());
  }, []);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleSelectAnswer = (answerId: string) => {
    if (currentQuestion) {
      setUserAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: answerId,
      }));
      setShowResult(true);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowResult(false);
    }
  };

  const handleRestartQuiz = () => {
    setQuestions(shuffleQuestions());
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResult(false);
    setQuizCompleted(false);
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Cloud size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AWS リソースクイズ</h1>
          <p className="text-gray-600">AWSのサービスと機能に関する知識をテストしましょう</p>
        </header>

        {!quizCompleted ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <QuizProgress 
              currentQuestion={currentQuestionIndex + 1} 
              totalQuestions={questions.length} 
            />
            
            <QuizCard
              question={currentQuestion}
              selectedAnswer={userAnswers[currentQuestion.id] || null}
              onSelectAnswer={handleSelectAnswer}
              showResult={showResult}
              questionNumber={currentQuestionIndex + 1}
            />
            
            {showResult && (
              <div className="flex justify-end">
                <button
                  onClick={handleNextQuestion}
                  className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  {isLastQuestion ? '結果を見る' : '次の問題へ'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <QuizResult 
            questions={questions} 
            userAnswers={userAnswers} 
            onRestart={handleRestartQuiz} 
          />
        )}
      </div>
    </div>
  );
}

export default App;