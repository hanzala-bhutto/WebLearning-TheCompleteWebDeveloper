// import logo from './logo.svg';
// import './App.css';
import { Component } from "react";
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}

export default App;
