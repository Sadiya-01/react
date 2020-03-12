import React from 'react';
const site = "Brigade";
const specification = {length:2000,
    width : 1873}
const len =specification.length;
 const getDetails = specification =>(
     
     `${specification.length}(sqft) ${specification.width}(sqft)`
 );


 export default function New(){
     
     if(len>3000)
     {
         return("It is spacious -" + getDetails(specification));
     }
 else
 {
     return(" it is too small -" + getDetails(specification));
 }

 }


