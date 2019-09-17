import React from 'react'
import { string, func } from 'prop-types'
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

const DrumPad = ({ label, handler }) => {
  return <Pad onClick={handler}>{label}</Pad>
}

DrumPad.propTypes = {
  label: string.isRequired,
  handler: func.isRequired,
}

export default DrumPad
