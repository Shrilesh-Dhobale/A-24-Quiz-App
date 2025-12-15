import { useState } from 'react'
import questions from './data'
import './App.css'
import { ArrowRight } from 'lucide-react';


function App() {
  const [questionIndex,SetQuestionIndex] = useState(0);
  const currentQuestion = questions[questionIndex];
  const checkAnswer = (selectedOption) => {
    if(selectedOption === currentQuestion.answer){
      alert("Correct Answer!");
    } else {
      alert(`Wrong Answer! The correct answer is: ${currentQuestion.answer}`);
    }
  };

  return (
   <div>
    <h1 className='app-head'>Quiz Application</h1>
    <p className="question-no">Questions:{questionIndex+1}</p>
    <p className="question-text">{currentQuestion.question}</p>
    {currentQuestion.option.map((option,idx)=>(
      <div key={idx} className='option-card' 
      onClick={()=>
        checkAnswer(option)
      }>{option}</div>
    ))}
    
    <ArrowRight 
    className="next-question"
    onClick={()=>{
      if(questionIndex < questions.length - 1){
        SetQuestionIndex(questionIndex + 1);
      }
    }}
    />
   </div>
  )
};

export default App
