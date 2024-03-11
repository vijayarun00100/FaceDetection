import React from "react";

class signin extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      email:'',
      passwd:''
    }
  }

  onEmailChange = (event) => {
    this.setState({email:event.target.value});
  }

  onPasswdChange = (event) => {
    this.setState({passwd:event.target.value});
  }

  onSubmit = () => {
    fetch('http://localhost:3000/signin',{
      method:'post',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.passwd
      })
    }).then(recieve => recieve.json()).then(data => {
      if(data.response === 'signing in !'){
        this.props.OnSwitch('home');
        this.props.loaduser(data)
      }
    })
    
  }

  render(){
    const {OnSwitch} = this.props;
    return(
      <div>
          <main className="pa4 white-80">
            <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange} />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswdChange}/>
                </div>
              </fieldset>
              <div className="">
                <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.onSubmit} />
              </div>
              <div className="lh-copy mt3">
                <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="register" onClick={() => OnSwitch('register')} />

              </div>
            </div>
          </main>
      </div>
  )
  }
}
export default signin;