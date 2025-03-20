import React from "react";
import { useState, useEffect } from "react";
import styles from '@/styles/setTimeAssigment/quiz.module.css'
 
 interface QuizQuestionProps {
   question: string;
   options: string[];
   timeLimit: number;
 }
 
 const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, options, timeLimit }) => {
    const [timeRemaining, setTimeRemaining] = useState(timeLimit);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [quizEnded, setQuizEnded] = useState(false);
  
    useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setQuizEnded(true)
    }
  }, [timeRemaining])

    const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setQuizEnded(true);
  };
 
   return (
    <div className={styles.quizQuestion}>
       <h3>{question}</h3>
       {!quizEnded ? (
        <div>
          <div className={styles.timeRemaining}>Time remaining: {timeRemaining} seconds</div>
          <div className={styles.options}>
            {options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} className={styles.optionButton}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>{selectedAnswer ? `Your Answer: ${selectedAnswer}` : "Time's up! You didn't answer."}</p>
      )}
    </div>
  );
};
 
 export default QuizQuestion;