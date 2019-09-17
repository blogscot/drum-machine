import React, { Component } from 'react'
import styled from 'styled-components'

const Pad = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  font-size: 22px;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 1px 3px 6px grey;
  background-color: rgb(233, 241, 204);
  cursor: pointer;

  :active {
    background-color: lightblue;
    color: white;
  }
`

class DrumPad extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handler)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handler)
  }
  render() {
    const { label, handler } = this.props
    return <Pad onClick={handler}>{label}</Pad>
  }
}

export default DrumPad
