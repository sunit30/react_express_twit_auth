import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Auth from "./components/Auth/Auth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showForm: false };
  }

  authHandler = () => {
    this.setState({ showForm: true });
  };
  render() {
    return (
      <div>
        <Auth authHandler={this.authHandler}></Auth>
        <Form showForm={this.state.showForm}></Form>
      </div>
    );
  }
}

export default App;
