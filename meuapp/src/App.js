import react from "react";
const Bemvindo = (props) => {
  return(
    <div> <h2>Bem vindo {props.nome}</h2></div>
   
  );
}

function App() {
  return(
    <div>
      Olá MUNDO!
      <Bemvindo nome="biel"/>
      <h1>react</h1>
    </div>
  )
  
}
export default App;