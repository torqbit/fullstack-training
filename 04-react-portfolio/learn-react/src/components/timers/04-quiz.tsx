import React from "react";

interface QuizQuestionProps {
  question: string;
  options: string[];
  timeLimit: number;
  onTimeout: () => void;
  onAnswer: (answer: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, options, timeLimit, onTimeout, onAnswer }) => {
  // TODO: Implement quiz functionality
  // - Set up countdown timer
  // - Handle option selection
  // - Show remaining time
  // - Handle timeout
  // - Clean up timer on unmount

  return (
    <div className='quiz-question'>
      <h3>{question}</h3>
      <div className='time-remaining'>Time remaining: {timeLimit} seconds</div>
      <div className='options'>
        {options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)} className='option-button'>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
