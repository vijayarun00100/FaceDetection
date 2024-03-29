import React from "react";
import "./imagelink.css";
function link({OnInput,OnButton}){
    return(
        <>  <div style={{display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>
                <p className="f3">
                        {'This Brain will detect faces in the image! Give it a try.. '}
                </p>
            </div>
                <div className="form center pa4 br3 shadow-5 w-50">
                    <input type="text" className="f4 pa2 center w-70" onChange={OnInput}/>
                    <button className="w-fit center grow f4 link pointer ph5 pv2 dib black bg-blue br2" onClick={OnButton}>Detect</button>
                </div>
        </>
    )
}

export default link;