import React, { Component } from 'react'
import DrumPad from './DrumPad.js'
import Display from './Display.js'
import Volume from './Volume.js'
import PowerSwitch from './PowerSwitch.js'

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
      let audio = new Audio(drumURL + sound.sample)
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
    console.log('onToggle', event.target.value)
    this.setState({
      powerOn: !this.state.powerOn,
      name: '',
    })
  }
  render() {
    return (
      <div>
        <PowerSwitch
          powerOn={this.state.powerOn}
          handler={this.handlePowerSwitch}
        />
        <Display text={this.state.name} />
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
        <Volume volume={this.state.volume} handler={this.handleVolume} />
      </div>
    )
  }
}

export default Board
