import React from 'react'
import PropTypes from 'prop-types';

const Button = ({ title, color, onClick }) => {
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={onClick}
      >
        {title}
      </button>
    </div >
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
