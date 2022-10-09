/**
 * ? (we DO NOT need to import react anymore)
 */

// import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  const headerStyles = {
    backgroundColor: props.bgColor,
    color: props.bgText,
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h1>{props.text}</h1>
      </div>
    </header>
  )
}

/**
 * ? we can assign default props
 * ? in case the are not passed
 * ? and type them as follow
 * ? defaultProps sets the prop value
 * ? propTypes sets type of prop
 */

Header.defaultProps = {
  text: 'Feedback Ui default',
  bgColor: 'rgba(0,0,0,0.4)',
  bgText: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  bgText: PropTypes.string,
}

/**
 * ? export Header
 */

export default Header
