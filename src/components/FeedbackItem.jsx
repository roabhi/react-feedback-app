import PropTypes from 'prop-types'
import Card from './shared/Card'

const FeedbackItem = (props) => {
  return (
    <Card even={props.even}>
      <div className="num-display">{props.item.rating}</div>
      <div className="text-display">{props.item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
