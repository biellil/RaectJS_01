import react from "react";

const Equipe=(props) =>{
return(
  <div>
     {props.nome}
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