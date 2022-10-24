import { Component } from "react";
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <ImageLinkForm />
        <Rank />
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}

export default App;
