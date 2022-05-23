import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css';
import Emaillist from "./Components/Emaillist";
import Header from './Components/Header';
import Mail from "./Components/Mail";
import SendMail from "./Components/SendMail";
import Sidebar from './Components/Sidebar';
import { useSelector,useDispatch } from 'react-redux'
import {login, selectUser} from './features/userSlice'
import {selectSendMessageIsOpen} from './features/mailSlice'

import Login from "./Components/Login";
import { auth } from "./Firebase";
function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user =  useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      console.log(user)
      if(user){
        dispatch(
          login({
            displayName:user.displayName,
            email:user.email,
            photoUrl:user.photoURL
          })
        )
      }
    })
  });
  return (
    <Router>
    {user ? (<Login/>):(
      <div className="app">
        <Header />
        <div className="appbody">
        <Sidebar/>
          <Routes>
            <Route path="/" element={<Emaillist/>} />
            <Route path="/mail" element={<Mail/>} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail/>}
      </div>
      )}
    </Router>
  );
  
}

export default App;
