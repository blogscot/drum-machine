import React, { useState, useEffect } from 'react'
import DrumPad from './DrumPad.js'
import Display from './Display.js'
import Volume from './Volume.js'
import PowerSwitch from './PowerSwitch.js'
import styled from 'styled-components'

const Pads = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  width: 260px;
  height: 260px;
  border: 2px solid var(--secondary-color);
  border-radius: 0 0 10px 10px;
  padding: 16px;
  box-shadow: var(--shadow);
  background-color: var(--primary-color);
`
const drumURL = 'https://s3.amazonaws.com/freecodecamp/drums/'

const drumSounds = [
  {
    name: 'Heater 1',
    sample: 'Heater-1.mp3',
  },
  {
    name: 'Heater 2',
    sample: 'Heater-2.mp3',
  },
  {
    name: 'Chord 1',
    sample: 'Chord_1.mp3',
  },
  {
    name: 'Heater 3',
    sample: 'Heater-3.mp3',
  },
  {
    name: 'Heater 4',
    sample: 'Heater-4_1.mp3',
  },
  {
    name: 'Clap',
    sample: 'Heater-6.mp3',
  },
  {
    name: 'Open HH',
    sample: 'Dsc_Oh.mp3',
  },
  {
    name: "Kick n' Hat",
    sample: 'Kick_n_Hat.mp3',
  },
  {
    name: 'Closed HH',
    sample: 'RP4_KICK_1.mp3',
  },
]

const Board = () => {
  let [powerOn, setPowerOn] = useState(false)
  let [displayText, setDisplayText] = useState('')
  let [volume, setVolume] = useState(50)
  let [timerID, setTimerID] = useState(null)

  const preloadDrumSounds = () => {
    drumSounds.forEach(sound => {
      let audio = new Audio(drumURL + sound.sample)
      audio.load(sound.sample)
    })
  }
  const handleButtonPress = event => {
    if (!powerOn) return

    let key = ''
    if (event.type === 'keydown') {
      key = event.key
    } else if (event.type === 'click') {
      key = event.target.innerText.toLowerCase()
    }
    let sound = null
    switch (key) {
      case 'q':
        sound = drumSounds[0]
        break
      case 'w':
        sound = drumSounds[1]
        break
      case 'e':
        sound = drumSounds[2]
        break
      case 'a':
        sound = drumSounds[3]
        break
      case 's':
        sound = drumSounds[4]
        break
      case 'd':
        sound = drumSounds[5]
        break
      case 'z':
        sound = drumSounds[6]
        break
      case 'x':
        sound = drumSounds[7]
        break
      case 'c':
        sound = drumSounds[8]
        break
      default:
    }
    if (sound) {
      let audio = new Audio(drumURL + sound.sample)
      audio.volume = volume / 100
      audio.play()
      setDisplayText(sound.name)
    }
  }
  const handleVolume = event => {
    setVolume(event.target.value)
  }
  const handlePowerSwitch = () => {
    setPowerOn(!powerOn)
    setDisplayText(powerOn ? 'Bye!' : 'Welcome!')

    clearTimeout(timerID)
    let timer = setTimeout(() => {
      setDisplayText('')
    }, 1500)
    setTimerID(timer)
  }

  preloadDrumSounds()

  useEffect(() => {
    document.addEventListener('keydown', handleButtonPress)

    return () => {
      document.removeEventListener('keydown', handleButtonPress)
    }
  })
  return (
    <div>
      <PowerSwitch powerOn={powerOn} handler={handlePowerSwitch} />
      <Display text={displayText} />
      <Pads>
        <DrumPad label="Q" handler={handleButtonPress} />
        <DrumPad label="W" handler={handleButtonPress} />
        <DrumPad label="E" handler={handleButtonPress} />
        <DrumPad label="A" handler={handleButtonPress} />
        <DrumPad label="S" handler={handleButtonPress} />
        <DrumPad label="D" handler={handleButtonPress} />
        <DrumPad label="Z" handler={handleButtonPress} />
        <DrumPad label="X" handler={handleButtonPress} />
        <DrumPad label="C" handler={handleButtonPress} />
      </Pads>
      <Volume volume={volume} handler={handleVolume} />
    </div>
  )
}

export default Board
