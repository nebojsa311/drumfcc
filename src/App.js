import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    /*Name of the sound that is played stored in state*/
    this.state = {
      nameOfSound: "Name",
    }
    /*Binding 'this' to functions*/
    this.checker = this.checker.bind(this);
    this.playSound = this.playSound.bind(this);
  }
   /*Function that target clicked div element and play child audio element, 
   also update state with the name of sound that si played */
   playSound(event){
    let sound = event.currentTarget.firstChild;
    sound.play();
    this.setState({nameOfSound: event.currentTarget.id})
  }
  /*function that take pressed keybord button code and store it in codeV variable 
  and then check is it equal to any of the wanted buttons.
  If there is a match, it target coresponding div element, play sound, update state, add and remove css class with short delay */
  checker(event){
    let codeV = event.keyCode;

    if(codeV === 81){
      document.getElementById("Heater-1").firstChild.play(); this.setState({nameOfSound: "Heater-1"});
      document.getElementById("Heater-1").classList.add("drum-pad-active");
      setTimeout(() => {document.getElementById("Heater-1").classList.remove("drum-pad-active")}, 100);
    }
    else if (codeV === 87){
      document.getElementById("Heater-2").firstChild.play(); this.setState({nameOfSound: "Heater-2"});
      document.getElementById("Heater-2").classList.add("drum-pad-active");
      setTimeout(() => {document.getElementById("Heater-2").classList.remove("drum-pad-active")}, 100);
    }
    else if (codeV === 69){
      document.getElementById("Heater-3").firstChild.play(); this.setState({nameOfSound: "Heater-3"});
      document.getElementById("Heater-3").classList.add("drum-pad-active");
      setTimeout(() => {document.getElementById("Heater-3").classList.remove("drum-pad-active")}, 100);
    }
    else if (codeV === 65){
      document.getElementById("Heater-4").firstChild.play(); this.setState({nameOfSound: "Heater-4"});
      document.getElementById("Heater-4").classList.add("drum-pad-active");
      setTimeout(() => {document.getElementById("Heater-4").classList.remove("drum-pad-active")}, 100);
    }
    else if (codeV === 83){document.getElementById("Clap").firstChild.play(); this.setState({nameOfSound: "Clap"});
    document.getElementById("Clap").classList.add("drum-pad-active");
    setTimeout(() => {document.getElementById("Clap").classList.remove("drum-pad-active")}, 100);
  }
    else if (codeV === 68){document.getElementById("Open-HH").firstChild.play(); this.setState({nameOfSound: "Open-HH"});
    document.getElementById("Open-HH").classList.add("drum-pad-active");
    setTimeout(() => {document.getElementById("Open-HH").classList.remove("drum-pad-active")}, 100);
  }
    else if (codeV === 90){document.getElementById("Kick-n'-Hat").firstChild.play(); this.setState({nameOfSound: "Kick-n'-Hat"});
    document.getElementById("Kick-n'-Hat").classList.add("drum-pad-active");
    setTimeout(() => {document.getElementById("Kick-n'-Hat").classList.remove("drum-pad-active")}, 100);
  }
    else if (codeV === 88){document.getElementById("Kick").firstChild.play(); this.setState({nameOfSound: "Kick"});
    document.getElementById("Kick").classList.add("drum-pad-active");
    setTimeout(() => {document.getElementById("Kick").classList.remove("drum-pad-active")}, 100);
  }
    else if (codeV === 67){document.getElementById("Closed-HH").firstChild.play(); this.setState({nameOfSound: "Closed-HH"});
    document.getElementById("Closed-HH").classList.add("drum-pad-active");
    setTimeout(() => {document.getElementById("Closed-HH").classList.remove("drum-pad-active")}, 100);
  };

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
        <div id="display">{this.state.nameOfSound}</div>
        <div className="drum-pad" id="Heater-1" onClick={this.playSound}>
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" className="clip" id="Q"/>Q
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
