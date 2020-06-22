import React, { useState, useEffect } from "react";
import './App.css'
import Recepie from './recepie'
import axios from "axios";
const App=()=>{
  const APP_ID='10d14ae2';
  const APP_KEY='e2fe97c9089d2fabcfb3757b1f9d11ea';
 const [recepies, setRecepies] = useState([]);
 const [search, setSearch]=useState("");
 const [query,setQuery]=useState("cheese");
 useEffect(() => {

   const fetchData = async () => {
    const data = await axios.get(
     `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
   
    setRecepies(data.data.hits);
  

  };
   fetchData();}, [query]);

 const updateSearsh =e=>
 {
setSearch(e.target.value);
 }
 const getSearsh=e=>
 {
e.preventDefault();
setQuery(search);
 }
 return (  
     <div  className="App">
      <form onSubmit={getSearsh} className="search-form">
        <input className="search-bar"type="text" value={search} onChange={updateSearsh}/>
        <button className="search-button" type="submit">Search</button>
      </form>

<div className="recepies">
      {recepies &&recepies.map(recepie=>(
<Recepie
key={recepie.recipe.label}
title={recepie.recipe.label} 
calories={recepie.recipe.calories} 
image={recepie.recipe.image}
ingredients={recepie.recipe.ingredients}/>

      ))}
      </div>
       </div>

 );
}
export default App;