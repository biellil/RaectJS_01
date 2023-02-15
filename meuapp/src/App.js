import React from "react";

const Equipe=(props) =>{
return(
  <div>
     <Sobre nome ={props.nome}
      cargo={props.cargo}
      idade={props.idade}/>
      <hr/>
  </div>
);
}
const Sobre = (props)=>{
  return(
    <div>
          <h2>Ola sou o(a) {props.nome}</h2>
          <h3>cargo: {props.cargo}</h3>
          <h3>idade: {props.idade}</h3>
    </div>
  );
}



function App() {
  return(
    <div>
      <h1>Conheça nosso equipe:</h1>
      <Equipe nome="lucas" cargo="programador" idade="21"/>
     
    </div>
  )
  
}
export default App;