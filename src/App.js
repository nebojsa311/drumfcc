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

  
  render(){
    return(
      <div id="drum-machine">
        <div id="display">name of sound</div>
        <div className="drum-pad" id="Heater-1" onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q" />Q
        </div>
        <div className="drum-pad" id="Heater-2"><audio src="#" className="clip" id="W"></audio>W</div>
        <div className="drum-pad" id="Heater-3"><audio src="#" className="clip" id="E"></audio>E</div>
        <div className="drum-pad" id="Heater-4"><audio src="#" className="clip" id="A"></audio>A</div>
        <div className="drum-pad" id="Clap"><audio src="#" className="clip" id="S"></audio>S</div>
        <div className="drum-pad" id='Open-HH'><audio src="#" className="clip" id="D"></audio>D</div>
        <div className="drum-pad" id="Kick-n'-Hat"><audio src="#" className="clip" id="Z"></audio>Z</div>
        <div className="drum-pad" id="Kick"><audio src="#" className="clip" id="X"></audio>X</div>
        <div className="drum-pad" id="Closed-HH"><audio src="#" className="clip" id="C"></audio>C</div>
      </div>
    )
  }
}

export default App;
