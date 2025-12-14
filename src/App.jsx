import { useState } from 'react'
import questions from './data'
import './App.css'

function App() {
  const [questionIndex,SetQuestionIndex] = useState(0);
  return (
   <div>
    <h1>Quiz Application</h1>
    <p className="">Questions:{questionIndex+1}</p>
   </div>
  )
};

export default App
