import React from "react";

function Navigation({OnSwitch,Issigned}) {
    if(Issigned){
        return(
            <nav style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
            <p className="f3 link dim underline white pointer pa3" onClick={() => OnSwitch('signin')}>sign out</p>
            </nav>
        )
    }else{
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                <p className="f3 link dim underline white pointer pa3" onClick={() => OnSwitch('signin')}>sign In</p>
                <p className="f3 link dim underline white pointer pa3" onClick={() => OnSwitch('register')}>Register</p>
            </nav>
            
        );
    }
    
}

export default Navigation;
