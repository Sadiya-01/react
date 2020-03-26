import React from 'react';
function Event (){
    function clickHandler(){
        document.write('button clicked')
    }

    return(
        <div>
            <button onClick={clickHandler}>onClick</button>
        </div>
    )
}
export default Event;