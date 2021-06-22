import React from "react";
import PhotoProfil from "./Component/profil/PhotoProfil.js";
import FullName from "./Component/profil/FullName.js";
import  Address from "./Component/profil/Address.js";
import  "./App.css"
import { yellow } from "jest-matcher-utils/node_modules/chalk";
const App =()=>{
 return (
   <div >
   <header className="App" >
     <PhotoProfil />
     <FullName />
     <Address/>
     <button style={{background:"red"}}>envoyer Email</button>
     </header>
     </div>
     
 )
}
export default App;
