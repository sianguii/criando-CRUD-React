
import './App.css';
import InseriDado from './API/InseriDado';
import BuscaDado from './API/BuscaDado';
import AlteraDado from './API/AlteraDado';
import DeletaDado from './API/DeletaDado';

function App() {
  return (
    <div className="App">
      <InseriDado></InseriDado>
      <BuscaDado></BuscaDado> 
      <AlteraDado></AlteraDado>
      <DeletaDado></DeletaDado>
    </div>
  );
}

export default App;
