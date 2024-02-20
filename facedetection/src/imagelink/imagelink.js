import React from "react";
import "./imagelink.css";
function link(){
    return(
        <>  <div style={{display:'flex',justifyContent:'center',alignItems:'center',color:'white'}}>
                <p className="f3">
                        {'This Brain will detect faces in the image! Give it a try.. '}
                </p>
            </div>
                <div className="form center pa4 br3 shadow-5" style={{width:'700px'}}>
                    <input type="text" className="f4 pa2 center w-70" />
                    <button className="w-30 center grow f4 link pointer ph3 pv2 dib black bg-blue br2">Detect</button>
                </div>
        </>
    )
}

export default link;