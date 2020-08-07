import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import ButtonShowdata from "../showdata/ButtonShowdata";
import ButtonRegister from "../register/ButtonRegister";
import './style.css';

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "black",
            padding: "25px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
	  <br/><br/><div className="btn-group btn-group-lg"><ButtonRegister/><ButtonShowdata/></div>
        </div>
      );
    } else {
      fbContent = (
	      <div
	      style={{
		      width: "400px",
		      margin: "auto",
		      background: "black",
		      padding: "25px"
	      }}
	>

        <FacebookLogin
          appId="996775287410330"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
	  <br/><br/><div className="btn-group btn-group-lg"><ButtonRegister/></div><br/>
	  </div>
      );
    }

    return <div>{fbContent}</div>;
  }
}
