import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
  }

   playSound(event){
    let sound = event.currentTarget.firstChild;
    sound.play();
  }

  checker(event){
    let codeV = event.keyCode;
    if(codeV === 81){document.getElementById("Heater-1").firstChild.play()};
  }

  componentDidMount(){
    document.addEventListener("keydown", this.checker, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.checker, false);
  }

  
  render(){
    return(
      <div id="drum-machine">
        <div id="display">name of sound</div>
        <div className="drum-pad" id="Heater-1" onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q" />Q
        </div>
        <div className="drum-pad" id="Heater-2" onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" className="clip" id="W"></audio>W
        </div>
        <div className="drum-pad" id="Heater-3" onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" className="clip" id="E"></audio>E
        </div>
        <div className="drum-pad" id="Heater-4" onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" className="clip" id="A"></audio>A
        </div>
        <div className="drum-pad" id="Clap" onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" className="clip" id="S"></audio>S
        </div>
        <div className="drum-pad" id='Open-HH' onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" className="clip" id="D"></audio>D
        </div>
        <div className="drum-pad" id="Kick-n'-Hat" onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" className="clip" id="Z"></audio>Z
        </div>
        <div className="drum-pad" id="Kick" onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" className="clip" id="X"></audio>X
        </div>
        <div className="drum-pad" id="Closed-HH" onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C"></audio>C
        </div>
      </div>
    )
  }
}

export default App;
