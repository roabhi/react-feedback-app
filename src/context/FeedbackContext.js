import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  //Fetach feedback

  const fetchFeedback = async () => {
    //const response = await fetch(`http://localhost:5000/feedback`)
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    )

    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

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
        feedback: feedback, // ?This is a State
        feedbackEdit: feedbackEdit, // ? This is the STATE editing Feedback
        isLoading: isLoading, // ? This is a State
        deleteFeedback: deleteFeedback, // ? This is a function
        addFeedback: addFeedback, // ? This is a function
        editFeedback: editFeedback, // ? This is the FUNCTION editing Feedback
        updateFeedback: updateFeedback, // ? This is a function
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
