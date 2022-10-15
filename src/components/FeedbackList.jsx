import Proptypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  return (
    <div className="feedback-list">
      {feedback.map((item, index) => (
        <FeedbackItem
          key={item.id}
          handleDelete={handleDelete}
          item={item}
          even={index % 2 !== 0 ? true : false}
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: Proptypes.array,
}

export default FeedbackList
