import React, { Component } from 'react'
import DrumPad from './DrumPad.js'
import Display from './Display.js'
import Volume from './Volume.js'
import PowerSwitch from './PowerSwitch.js'

import heater1 from '../audio/Heater-1.mp3'
import heater2 from '../audio/Heater-2.mp3'
import chord1 from '../audio/Chord_1.mp3'
import heater3 from '../audio/Heater-3.mp3'
import heater4 from '../audio/Heater-4_1.mp3'
import clap from '../audio/Heater-6.mp3'
import openHH from '../audio/Dsc_Oh.mp3'
import kickNHat from '../audio/Kick_n_Hat.mp3'
import closedHH from '../audio/RP4_KICK_1.mp3'

const drumSounds = [
  {
    name: 'Heater 1',
    sample: heater1,
  },
  {
    name: 'Heater 2',
    sample: heater2,
  },
  {
    name: 'Chord 1',
    sample: chord1,
  },
  {
    name: 'Heater 3',
    sample: heater3,
  },
  {
    name: 'Heater 4',
    sample: heater4,
  },
  {
    name: 'Clap',
    sample: clap,
  },
  {
    name: 'Open HH',
    sample: openHH,
  },
  {
    name: "Kick n' Hat",
    sample: kickNHat,
  },
  {
    name: 'Closed HH',
    sample: closedHH,
  },
]

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      powerOn: false,
      name: '',
      volume: 50,
    }
    this.handleButtonPress = this.handleButtonPress.bind(this)
    this.handleVolume = this.handleVolume.bind(this)
    this.handlePowerSwitch = this.handlePowerSwitch.bind(this)
  }
  handleButtonPress = event => {
    if (!this.state.powerOn) return

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
      let audio = new Audio(sound.sample)
      audio.volume = this.state.volume / 100
      audio.play()
      this.setState({
        name: sound.name,
      })
    }
  }
  handleVolume(event) {
    this.setState({
      volume: event.target.value,
    })
  }
  handlePowerSwitch(event) {
    this.setState({
      powerOn: !this.state.powerOn,
      name: '',
    })
  }
  render() {
    const { powerOn, name, volume } = this.state
    return (
      <div>
        <PowerSwitch powerOn={powerOn} handler={this.handlePowerSwitch} />
        <Display text={name} />
        <div className="drum-board">
          <DrumPad label="Q" handler={this.handleButtonPress} />
          <DrumPad label="W" handler={this.handleButtonPress} />
          <DrumPad label="E" handler={this.handleButtonPress} />
          <DrumPad label="A" handler={this.handleButtonPress} />
          <DrumPad label="S" handler={this.handleButtonPress} />
          <DrumPad label="D" handler={this.handleButtonPress} />
          <DrumPad label="Z" handler={this.handleButtonPress} />
          <DrumPad label="X" handler={this.handleButtonPress} />
          <DrumPad label="C" handler={this.handleButtonPress} />
        </div>
        <Volume volume={volume} handler={this.handleVolume} />
      </div>
    )
  }
}

export default Board
