import React from 'react';
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          title={showAdd ? 'Close' : 'Add'}
          color={showAdd ? 'steelblue' : 'green'}
          onClick={onAdd}
        />
      )}

    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onAdd: PropTypes.func,
  showAdd: PropTypes.bool,
}

export default Header
