import React from 'react'
import { Toggle } from 'react-toggle-component'
import styled from 'styled-components'

const Label = styled.label`
  font-weight: bold;
  font-family: 'Joti One', cursive;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;
`

const PowerSwitch = ({ powerOn, handler }) => {
  return (
    <Label htmlFor="toggle-1">
      Power
      <Toggle name="toggle-1" onToggle={handler} value={powerOn} />
    </Label>
  )
}

export default PowerSwitch
