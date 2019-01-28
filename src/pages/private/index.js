import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Private extends Component {
  state = {
    redirect: false
  };

  renderRedirect = () => {
    if (this.state.redirect) return <Redirect to="/" />;
  };

  handleSignout = () => {
    localStorage.removeItem("@Projeto:token");

    this.setState({ redirect: true });
  };

  render() {
    return (
      <div>
        Rota privada
        <br />
        {this.renderRedirect()}
        <button onClick={this.handleSignout}>Signout</button>
      </div>
    );
  }
}
