import React from 'react'
const Recepie=({title,calories,image})=>{
return (

    <div >
      <h1>{title}</h1>
<p>{calories}</p>
      <img src={image} alt='bla bla'/>

       </div>
);
}
export default Recepie ;
