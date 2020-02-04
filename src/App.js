import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let alarmit = ()=>{alert("Hello motherfucker")}
    return(
      <div id="drum-machine">
        <div id="display">name of sound</div>
        <div className="drum-pad" id="Heater-1" onKeyDown={alarmit}>Q</div>
        <div className="drum-pad" id="Heater-2">W</div>
        <div className="drum-pad" id="Heater-3">E</div>
        <div className="drum-pad" id="Heater-4">A</div>
        <div className="drum-pad" id="Clap">S</div>
        <div className="drum-pad" id='Open-HH'>D</div>
        <div className="drum-pad" id="Kick-n'-Hat">Z</div>
        <div className="drum-pad" id="Kick">X</div>
        <div className="drum-pad" id="Closed-HH">C</div>
      </div>
    )
  }
}

export default App;
