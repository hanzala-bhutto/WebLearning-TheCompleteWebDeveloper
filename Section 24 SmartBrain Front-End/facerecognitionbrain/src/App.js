import { Component } from "react";
import ParticlesBg from 'particles-bg';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';

class App extends Component {

  constructor(){
    super();
    this.state = {
      input : ''
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = (event) => {
    console.log("click");
  }

  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        {/* <FaceRecognition /> */}
        <ParticlesBg color="#ffffff" num={100} alpha={[0.9, 0]} type="cobweb" bg={true} />
      </div>
    )
  }
}

export default App;
