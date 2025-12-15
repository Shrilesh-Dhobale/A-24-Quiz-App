import { useState } from 'react'
import questions from './data'
import './App.css'
import { ArrowRight } from 'lucide-react';
import { toast,Toaster } from 'react-hot-toast';


function App() {
  const [questionIndex,SetQuestionIndex] = useState(0);
  const currentQuestion = questions[questionIndex];
  const [optionStyle,setOptionStyle] = useState({
    0: {},
    1: {},
    2: {},
    3: {}
  });
  const checkAnswer = (selectedOption,idx) => {
    if(selectedOption === currentQuestion.answer){
      toast.success("Correct Answer!");
      setOptionStyle({...optionStyle, [idx]: { backgroundColor: 'green' }});

    } else {
    toast.error(`Wrong Answer! The correct answer is: ${currentQuestion.answer}`);
    setOptionStyle({...optionStyle, [idx]: { backgroundColor: 'red' }});
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
        checkAnswer(option, idx)
      }
      style={optionStyle[idx]}
      >{option}</div>
    ))}
    
    <ArrowRight 
    className="next-question"
    onClick={()=>{
      if(questionIndex < questions.length - 1){
        SetQuestionIndex(questionIndex + 1);
      }
      setOptionStyle({
        0: {},
        1: {},
        2: {},
        3: {}
      });
    }}
    />
    <Toaster />
   </div>
  )
};

export default App
