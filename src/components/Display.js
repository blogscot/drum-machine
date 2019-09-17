import React from 'react'
import styled from 'styled-components'

const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  height: 60px;
  margin-bottom: 0;
  padding: 8px;
  border: 2px solid rgb(99, 36, 36);
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  box-shadow: 1px 3px 18px grey;
  background-color: rgb(231, 241, 243);
  color: black;
  box-sizing: border-box;
`

const Display = ({ text }) => {
  return <Panel>{text}</Panel>
}

Display.defaultProps = {
  text: '',
}

export default Display
