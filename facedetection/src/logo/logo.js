import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import Brain from './brain.png';
const logo = () => {
  return (
    <div className='ma4 mt0'>
        <Tilt className='br2 shadow-2 w3'>
          <div style={{ height: '100px', width:'100px', backgroundColor: 'white',borderRadius:'10px'}}>
            {/* <h2>👀</h2>
            <h2 className='white'>FuTure Face</h2> */}
            <div className='pa3'>
                <img src={Brain} alt='logo' />
            </div>
          </div>
        </Tilt>
    </div>
  );
};

export default logo;