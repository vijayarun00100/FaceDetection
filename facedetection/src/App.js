import './App.css';
import Navigation from './navigation/navigation';
import Logo from './logo/logo';
import Link from './imagelink/imagelink';
import Rank from './rank/rank';
import Detection from './detection/detection';
import 'tachyons';
import React from 'react';

const returnClarifai = (ImageUrl) =>{
  const PAT = '97b313ad42ca46bd82209133911b7106';
  const USER_ID = 'vijayarun00100';       
  const APP_ID = 'test';
  const MODEL_ID = 'face-detection';  
  const IMAGE_URL = ImageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});

const requestOptions = {
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
  },
  body: raw
};

return requestOptions;
}



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageurl:'',
      box:'',
    }
  }

  calculatebox = (data) =>{
    const value = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol : value.left_col * width,
      topRow : value.top_row * height,
      rightCol : width - (value.right_col * width),
      bottomRow : height - (value.bottom_row * height),
    }
  }

  drawbox = (coordinates) => {
    this.setState({box : coordinates});
    console.log(coordinates);
  }


  OnInput = (event) => {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  error = (val) => {
    return{leftCol : val,
    topRow : 0,
    rightCol : 0,
    bottomRow : 0,}
  }

  OnButton = () => {
    console.log("click");
    console.log(this.state.input);
    this.setState({imageurl:this.state.input});
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", returnClarifai(this.state.input))
        .then(response => response.json())
        .then(data =>{
          this.drawbox(this.calculatebox(data));
          const dat = document.getElementsByClassName("detect_area")[0];
          dat.style.position = "absolute";
        })
        .catch(err => {
          this.setState({box : this.error(0)});
          console.log("prediction: not a human!");
          const dat = document.getElementsByClassName("detect_area")[0];
          dat.style.position = "relative";
        }) 
  }

  
  render() {
  return(
    <div className="App">
    <Navigation />
    <Logo />
    <Rank />
    <Link OnInput={this.OnInput} OnButton={this.OnButton}/>
    <Detection box={this.state.box} ImageURL={this.state.imageurl}/>
    </div>
    )
  };
}

export default App;
