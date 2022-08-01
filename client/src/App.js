import {BrowserRouter , Route, Routes } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import AddEdit from "./components/AddEdit";
import View from "./components/View";
function App() {
  return (
    <BrowserRouter>

<div className="App">
      <ToastContainer  position="top-center"/>

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addfoot' element={<AddEdit/>} />
      <Route path='/update/:id' element={<AddEdit/>} />
      <Route path='/view/:id' element={<View/>} />
      </Routes>
  
    </div>

    </BrowserRouter>

  );
}

export default App;
