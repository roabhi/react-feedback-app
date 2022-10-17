import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is from context',
      rating: 10,
    },
  ])

  const addFeedback = (newFeedback) => {
    /**
     * ? We assign a unique id for the new entry with uuid
     * ? Then we add the new entry BEFORE the other objects in the array. To add it at the end it will be
     * * setFeedback([...feedback, newFeedback])
     */
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
