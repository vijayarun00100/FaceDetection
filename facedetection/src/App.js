import './App.css';
import Navigation from './navigation/navigation';
import Logo from './logo/logo';
import Link from './imagelink/imagelink';
import Rank from './rank/rank';
import Detection from './detection/detection';
import Signin from './Signin/signin';
import Register from './register.js/register';
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
      router:'',
      Issigned:false,
      user:{
        "id":"",
        "name":"",
        "email":"",
        "password":"",
        "entries":0,
        "joined":''
      }
    }
  }

  loaduser = (data) => {
    this.setState({
      user:{
        "id":data.id,
        "name":data.name,
        "email":data.email,
        "password":data.password,
        "entries":data.entries,
        "joined": data.joined
      }
    })
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
    console.log(this.state.user.id);
    
    fetch("http://localhost:3000/image",{
      method:"put",
      headers:{'content-type':'application/json'},
      body:
        JSON.stringify({
          id:this.state.user.id
        })
    }).then(response => response.json()).then(data => {
      if(data){
        this.setState({
          user: {
              ...this.state.user, // Preserve other properties of user
              entries: data.entries
          }
      });
      }
    })
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
  OnSwitch = (val) => {
   
    if(val === 'home'){
      this.setState({Issigned:true});
      console.log('signout'+this.state.Issigned)
    }else{
      this.setState({Issigned:false});
    }
    this.setState({router:val})
  }

  OnCheck = () => {
    this.setState({Issigned:true})
  }

  render() {
  return(
    <div className="App">
      <Navigation OnSwitch={this.OnSwitch} Issigned={this.state.Issigned}/>
      {this.state.router === 'home' ? 
      <div>
        <Logo />
        <Rank entries={this.state.user.entries}/>
        <Link OnInput={this.OnInput} OnButton={this.OnButton}/>
        <Detection box={this.state.box} ImageURL={this.state.imageurl}/>
      </div>
      :(
        this.state.router  === 'signin' ? <Signin loaduser = {this.loaduser} OnSwitch={this.OnSwitch} /> 
        : <Register loaduser = {this.loaduser} OnSwitch={this.OnSwitch} />
      )
      }
    </div>
    )
  };
}

export default App;
