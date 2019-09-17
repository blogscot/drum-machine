import React from 'react'
import styled from 'styled-components'
import Board from './components/Board.js'
import './App.css'

const DrumMachine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  font-family: 'Joti One', cursive;
`

function App() {
  return (
    <DrumMachine>
      <Board />
    </DrumMachine>
  )
}

export default App
