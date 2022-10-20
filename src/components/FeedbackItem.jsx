import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'
import Card from './shared/Card'

const FeedbackItem = ({ even, item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  console.log(typeof even)

  return (
    <Card even={even}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color={even ? 'rgb(255, 106, 149)' : 'purple'} />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color={even ? 'rgb(255, 106, 149)' : 'purple'}></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  even: PropTypes.bool.isRequired,
}

export default FeedbackItem
