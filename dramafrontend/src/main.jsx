import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { BrowserRouter as Router, Routes,Route,  Link } from 'react-router-dom';
import DramaForm from './components/DramaForm'
import SignIn from './components/SignIn'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/dramas" element={<DramaForm/>}/>
      </Routes>
    </Router>
 
  </React.StrictMode>
)
