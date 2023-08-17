import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Stocks from './pages/Stocks'
import Home from './pages/Home'
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">


      <Navbar/>
      <Routes>


        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/stocks' element={<Stocks/>} />

      </Routes>
    </div>
  );
}

export default App;
