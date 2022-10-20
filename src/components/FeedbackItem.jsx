import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'
import Card from './shared/Card'

const FeedbackItem = ({ even, item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  /**
   * * Modify even cards
   * ? Change first value from FaIcons components (FaTimes && FaEdit)
   * ? Text color is editable from first value from div.text-display as well
   */

  return (
    <Card even={even}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color={even ? 'purple' : 'purple'} />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color={even ? 'purple' : 'purple'}></FaEdit>
      </button>
      <div
        className="text-display"
        style={{ color: even ? 'currentColor' : 'currentColor' }}
      >
        {item.text}
      </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  even: PropTypes.bool.isRequired,
}

export default FeedbackItem
