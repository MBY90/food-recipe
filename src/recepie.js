import React from 'react'
import Style from './recepies.module.css'
const Recepie=({title,calories,image,ingredients})=>{
return (

    <div className={Style.recepies} >
          <h1>{title}</h1>
          <ol>
       {ingredients && ingredients.map(ingredient=>(
            <li>
                  {ingredient.text}
            </li>
            ))}         
          </ol>
      
      <p>{calories}</p>
      <img  className={Style.image}src={image} alt='bla bla'/>

       </div>
);
}
export default Recepie ;
