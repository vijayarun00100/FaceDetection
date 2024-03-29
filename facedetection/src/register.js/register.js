import React from "react";

class register extends React.Component{
  constructor(props){
    super(props);
    this.state={
      regemail:'',
      regpasswd:'',
      name:''
    }
  }

  onEmailChange = (event) => {
    this.setState({regemail:event.target.value});
  }

  onPasswdChange = (event) => {
    this.setState({regpasswd:event.target.value});
  }

  onNameChange = (event) => {
    this.setState({name:event.target.value});
  }

  onSubmit = () => {
    fetch('http://localhost:3000/register',{
      method:'post',
      headers:{'content-type':'application/json'},
      body:
        JSON.stringify({
          name:this.state.name,
          password : this.state.regpasswd,
          email : this.state.regemail
        })
    }).then(response => response.json()).then(data => {
      this.props.loaduser(data);
      if(data.status === "success"){
        this.props.OnSwitch('home');
      } 
    })
  }

  render(){  
    return(
      <div>
          <main className="pa4 white-80">
            <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" onChange={this.onNameChange}/>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswdChange}/>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="Email">Email</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email"  id="email" onChange={this.onEmailChange} />
                </div>
              </fieldset>
              <div className="">
                <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="register" onClick={this.onSubmit} />
              </div>
              <div className="lh-copy mt3">
              </div>
            </div>
          </main>
      </div>
  )
  }  
}
export default register;