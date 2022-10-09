import Proptypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

const FeedbackList = (props) => {
  if (!props.feedback || props.feedback.length == 0) {
    return <p>No feedback yet</p>
  }

  return (
    <div className="feedback-list">
      {props.feedback.map((item, index) => (
        <FeedbackItem
          key={item.id}
          item={item}
          even={index % 2 != 0 ? true : false}
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: Proptypes.array,
}

export default FeedbackList
