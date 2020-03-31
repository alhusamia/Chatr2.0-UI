import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";


// Scripts
import main from "./assets/js/main";

// Components
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";
import SuperSecretPage from "./components/SuperSecretPage";
import ChannelForm from "./components/ChannelForm";
import Channel from "./components/Channel";

class App extends Component {
  componentDidMount() {
    main();
  }

  render() {
    return (
      <div className="content-wrapper">
        <NavBar />
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/(login|signup)" component={RegistrationForm} />
          <Route path="/private" component={SuperSecretPage} />
          <Route path="/channels/:channelID" component={Channel} />
          <Route path="/createChannel" component={ChannelForm} />
          <Redirect to="/welcome" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
