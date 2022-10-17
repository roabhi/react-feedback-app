// import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item, index) => (
        <FeedbackItem
          key={item.id}
          item={item}
          even={index % 2 !== 0 ? true : false}
        />
      ))}
    </div>
  )

  /**
   * * With motion. Does not work removing the actual div... 
   * * Maybe is because my extra prop even
   * ? return (
   * ? <div className="feedback-list">
   * ?   <AnimatePresence>
   * ?     {feedback.map((item, index) => (
   * ?       <motion.div
   * ?         key={item.id}
   * ?         initial={{ opacity: 0 }}
   * ?         animate={{ opacity: 1 }}
   * ?         exit={{ opacity: 0 }}
   * ?       >
   * ?         <FeedbackItem
   * ?           key={item.id}
   * ?           handleDelete={handleDelete}
   * ?           item={item}
   * ?           even={index % 2 !== 0 ? true : false}
   * ?         />
   * ?       </motion.div>
   * ?     ))}
   * ?   </AnimatePresence>
   * ? </div>
  )
   */
}

export default FeedbackList
