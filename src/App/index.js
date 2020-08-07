import React, { Component } from 'react';
import ButtonRegister from "../register/ButtonRegister";
import ButtonShowdata from "../showdata/ButtonShowdata";
import Facebook from "./Facebook";
import chk from "./Facebook";
import './style.css';

class App extends Component {
  render() {
	  if (chk != "yes"){
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
            <div className="mt-4"><Facebook/></div>
        </div>
      </div>
    );
	  }
  }
}

export default App;
