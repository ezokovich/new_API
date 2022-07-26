import {BrowserRouter , Route, Routes } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home"
function App() {
  return (
    <BrowserRouter>

<div className="App">
      <ToastContainer  position="top-center"/>

      <Routes>
      <Route path='/' element={<Home/>} />
      </Routes>
  
    </div>

    </BrowserRouter>

  );
}

export default App;
