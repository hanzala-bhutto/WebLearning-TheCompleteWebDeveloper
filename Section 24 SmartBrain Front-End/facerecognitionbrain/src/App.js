import { Component } from "react";
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import './App.css';

const app = new Clarifai.App({
  apiKey: '4cae014b57964844b259fe0a988be7e9',
});

const initialState = {
  input : '',
  imageUrl : '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user : {
    id: '',
    name: '',
    email:'',
    entries:'',
    joined: ''
  }
};

class App extends Component {

  constructor(){
    super();
    this.state = initialState;
  }

  // componentDidMount(){
  //   fetch("http://localhost:3000")
  //   .then(response => response.json())
  //   .then(console.log);
  // }

  loadUser = (userData) => {
    this.setState({user: {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      entries:userData.entries,
      joined: userData.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    } 
  
  }

  displayFaceBox = (box) => {
    this.setState({box:box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});

    app.models
      .predict(
        {
          id: 'face-detection',
          name: 'face-detection',
          version: '6dc7e46bc9124c5c8824be4822abe105',
          type: 'visual-detector',
        }, this.state.input)
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })

        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
}
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route:route});
  }

  render() {
    const {isSignedIn, imageUrl, box, route} = this.state;
    return (
      <div className="App">
        <ParticlesBg color="#ffffff" num={100} alpha={[0.9, 0]} type="cobweb" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {
        (route === 'home')
        ?        
        <div>
          <Logo />
          <Rank name = {this.state.user.name} entries = {this.state.user.entries}/>
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognition box={box} imageUrl={imageUrl}/>
        </div>
        :((route === 'signin')
          ?
          <Signin loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
          :
          <Register loadUser = {this.loadUser} onRouteChange={this.onRouteChange} />
          )

        }
      </div>
    )
  }
}

export default App;
