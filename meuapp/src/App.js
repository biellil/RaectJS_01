import react from "react";
const Bemvindo = (props) => {
  return(
    <div> 
      <h2>Bem vindo {props.nome}</h2>
      <h3>tem {props.idade} de idade</h3>
    </div>
   
  );
}

function App() {
  return(
    <div>
      Olá MUNDO!
      <Bemvindo nome="biel" idade="21"/>
      <Bemvindo nome="lana" idade="19"/>
     
    </div>
  )
  
}
export default App;