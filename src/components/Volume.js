import React from 'react'

const Volume = ({ volume, handler }) => {
  return (
    <div className="volume">
      <div className="volume-control">-</div>
      <input
        type="range"
        onChange={handler}
        id="volume-widget"
        min="0"
        max="100"
        value={volume}
      />
      <div className="volume-control">+</div>
    </div>
  )
}

export default Volume
