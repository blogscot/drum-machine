import React, { Component } from 'react'

class DrumPad extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handler)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handler)
  }
  render() {
    const { label, handler } = this.props
    return (
      <div className="drum-button" onClick={handler}>
        {label}
      </div>
    )
  }
}

export default DrumPad
