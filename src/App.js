import logo from './logo.svg';
import './App.css';
import Correct from './components/correct';
import Fail from './components/fail';
import ListComponent from './components/listdisplay';
function App() {
  return (
    <div>
      <p>My App</p>    
      <ListComponent/> 
      <Correct/> 
      <Fail/>
    </div>
  );
}

export default App;
