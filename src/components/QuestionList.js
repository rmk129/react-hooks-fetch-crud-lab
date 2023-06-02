import React, {useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({setQuestions, questions}) {

  function handleUpdateAnswer(updatedQuestion){
    const updatedQuestions = questions.map((question)=> {
      if (question.id === updatedQuestion.id){
        return updatedQuestion
      }
      else {
        return question
      }
    })
    setQuestions(updatedQuestions)
  }


  function handleDeleteClick(deletedItem){
    const updatedQuestions = questions.filter((question)=> question.id !== deletedItem.id)
    setQuestions(updatedQuestions)
  }

  useEffect(()=> {
    fetch("http://localhost:4000/questions")
    .then((r)=> r.json())
    .then((questions)=> setQuestions(questions) )
  }, [])

  const displayedQuestions = questions.map((question)=> {
    return <QuestionItem onUpdateAnswer={handleUpdateAnswer} onDeleteQuestion={handleDeleteClick} key={question.id} question={question}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayedQuestions/* display QuestionItem components here after fetching */}</ul>
    </section>
  );
}

export default QuestionList;
