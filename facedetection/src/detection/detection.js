import React from "react";
import './Detection.css';

function Detection({ ImageURL, box }) {
    return (
        <div className="flex ma" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="mt2" style={{ position: 'relative', width: 'fit-content' }}>
                <img id='inputimage' src={ImageURL} alt="" width='500px' height='auto' />
                <div className="detect_area" style={{
                    position: 'absolute',
                    top: box.topRow,
                    right: box.rightCol,
                    bottom: box.bottomRow,
                    left: box.leftCol,
                    border: '3px solid #149df2',
                    boxSizing: 'border-box',
                    pointerEvents: 'none',
                }}></div>
            </div>
        </div>
    );
}

export default Detection;
