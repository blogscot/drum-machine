import React from 'react'

const Display = ({ text }) => {
  return <div className="drum-display">{text}</div>
}

Display.defaultProps = {
  text: '',
}

export default Display
