
import './App.css';
import {ToastContainer} from 'react-toastify';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path = '/' element= {<Home/>} />
        <Route path = '/login' element= {<Login/>} />
        <Route path = '/signup' element= {<Register/>} />
      </Routes>
      <h1>Hello react </h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
