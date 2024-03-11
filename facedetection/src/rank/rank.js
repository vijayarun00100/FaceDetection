import React from "react";

function rank({entries}){
    return(
        <div className="flex" style={{justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <div className="f3 white">
                {'Hey Vijay , Your rank is...'}
            </div>
            <div className="f3 white">
                {entries}
            </div>
        </div>
    )
}

export default rank;