import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackItem from './components/FeedbackItem'

import FeedbackData from './data/data'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header text="Feedback UI" />
      <FeedbackList feedback={FeedbackData} />
    </>
  )
}

export default App
