import React from 'react'
import styled from 'styled-components'

const Control = styled.div`
  display: flex;
  background-color: var(--primary-color);
  margin-top: 30px;
  border: 1px solid grey;
  border-radius: 20px;
  box-shadow: var(--shadow);
`

const Label = styled.div`
  font-size: 36px;
  transform: translate(0, -1px);
  padding: 0 10px;
  color: white;
  cursor: default;
`

const Widget = styled.input`
  width: 214px;
  background-color: var(--primary-color);
`

const Volume = ({ volume, handler }) => {
  return (
    <Control>
      <Label>-</Label>
      <Widget
        type="range"
        onChange={handler}
        min="0"
        max="100"
        value={volume}
      />
      <Label>+</Label>
    </Control>
  )
}

export default Volume
