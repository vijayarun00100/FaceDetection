import './App.css';
import Navigation from './navigation/navigation';
import Logo from './logo/logo';
import Link from './imagelink/imagelink';
import Rank from './rank/rank';
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
    }
  }

  OnInput = (event) => {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  }

  OnButton = () => {
    console.log("click");
    console.log(this.state.input);
    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", returnClarifai(this.state.input))
        .then(response => response.json())
        .then(data => console.log(data))
  }

  render() {
  return(
    <div className="App">
    <Navigation />
    <Logo />
    <Rank />
    <Link OnInput={this.OnInput} OnButton={this.OnButton}/>
    </div>
    )
  };
}

export default App;
