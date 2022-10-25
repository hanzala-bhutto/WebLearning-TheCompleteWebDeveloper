import { Component } from "react";
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: '4cae014b57964844b259fe0a988be7e9'
 });
 

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

  onButtonSubmit = () => {
    // console.log("click");
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
    "https://samples.clarifai.com/face-det.jpg")
    .then(
    function(response){
        console.log(response);
        console.log("click");
    },
    function(err){
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition />
        <ParticlesBg color="#ffffff" num={100} alpha={[0.9, 0]} type="cobweb" bg={true} />
      </div>
    )
  }
}

export default App;
