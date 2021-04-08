// import logo from './logo.svg';
import './App.css';
import HelloWord from './components/Helloword';
import Formtarea from './components/Formtarea';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
        <HelloWord dato="de Tareas 📒"/>
        <Formtarea />
    </div>
  );
}


export default App;
