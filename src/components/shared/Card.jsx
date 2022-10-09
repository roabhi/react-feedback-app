import PropTypes from 'prop-types'

const Card = (props) => {
  /**
   * ? In this case the props are used via
   * ? children method of React
   * ? this makes the component take whatever is contained
   * ? in the nested content of the <Card></Card> component
   * ? This is a STYLED COMPONENT
   *
   *
   * ? We can still pass props to the component via
   * ? the regular way <Card reverse=true></Card>
   */

  /**
   * * Contidional style
   * ? return (<div className='card' style={{
   * ?  backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
   * ?  color: reverse ? '#fff' : '#000',
   * ? }})
   */

  /**
   * * Conditional Class
   */

  return (
    <>
      <div className={`card ${props.even ? 'even' : ''}`}>{props.children}</div>
    </>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card
