import React from "react";

function signin({OnSwitch}){
    return(
        <div>
            <main className="pa4 white-80">
              <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                  <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                  <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                  </div>
                  <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                  </div>
                </fieldset>
                <div className="">
                  <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={() => OnSwitch('home')} />
                </div>
                <div className="lh-copy mt3">
                  <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="register" onClick={() => OnSwitch('register')} />

                </div>
              </div>
            </main>
        </div>
    )
}
export default signin;