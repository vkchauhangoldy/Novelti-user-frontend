import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserForm from './Components/Forms/UserForm';
import Main from './Components/Main/Main';
import Update from './Components/Update/Update';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserForm />} />
          <Route path='/main' element={<Main />} />
          <Route path='/edit/:id' element={<Update />} />
          <Route path="*" element={<center style={{ color: "red", fontSize: "45px" }}>' 404 Page not found'</center>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
