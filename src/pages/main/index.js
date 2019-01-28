import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Main extends Component {
  state = {
    redirect: false
  };

  renderRedirect = () => {
    if (this.state.redirect) return <Redirect to="/private" />;
  };

  handleSignin = () => {
    localStorage.setItem("@Projeto:token", "123456");

    this.setState({ redirect: true });
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        Página inicial
        <br />
        {this.renderRedirect()}
        <button onClick={this.handleSignin}>Signin</button>
      </div>
    );
  }
}
