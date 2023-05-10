import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Requests from './components/Requests'
import Login from './components/Login'
import './index.css'

var isAllowed = false
// const [isAllowed, setIsAllowed] = useState(false)

const functionToGetchildData = (validateRouteLogin) => {
  if (validateRouteLogin === ''){
    isAllowed=true
  } else {
    isAllowed=false
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<App />} />
        <Route element={<ProtectedRoute isAllowed={isAllowed}/>}>
          <Route path="requests" element={<Requests/>} />
        </Route>
        <Route path="Home" element={<Home />} />
        <Route path='login' element={<Login childToParentData={functionToGetchildData}/>}/>
      </Routes>
      </HashRouter>
  </React.StrictMode>,
)
