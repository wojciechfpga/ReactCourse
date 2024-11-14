import './App.css';
import { Routes, Route } from 'react-router';
import ListComponent from './components/listdisplay';
import About from './components/about';
import Header from './components/header';

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Header />} >
        <Route index element={<ListComponent />} />
        <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
