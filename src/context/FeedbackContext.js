import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is the first feedback',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is the second feedback',
      rating: 7,
    },
    {
      id: 3,
      text: 'This is the third feedback',
      rating: 8,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  //Add feedback
  const addFeedback = (newFeedback) => {
    /**
     * ? We assign a unique id for the new entry with uuid
     * ? Then we add the new entry BEFORE the other objects in the array. To add it at the end it will be
     * * setFeedback([...feedback, newFeedback])
     */
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  //Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  //Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit: feedbackEdit, // ? This is the STATE
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback: editFeedback, // ? This is the FUNCTION
        updateFeedback: updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
