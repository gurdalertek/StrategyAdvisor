import React, { Component } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux";
import store from "../store";
// import { loadUser } from '../actions/authActions';
import AppNavbar from "../components/AppNavbar";
import { loadReCaptcha } from "react-recaptcha-google";

class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser());
  //   loadReCaptcha();
  // }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
        </div>
      </Provider>
    );
  }
}

export default App;
