import React from 'react';
const site = "Brigade";
const specification = {length:2000,
    width : 1873}
const len =specification.length;
 const getDetails = specification =>(
     
     `${specification.length}(sqft) ${specification.width}(sqft)`
 );


  function New(){
     
     if(len>3000)
     {
        ("It is spacious -" + getDetails(specification));
     }
 else
 {
     (" it is too small -" + getDetails(specification));
 }

 }

export default New;
