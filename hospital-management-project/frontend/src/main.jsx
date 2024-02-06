import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DoctorDataProvider from './useHooks/DoctorDataProvider.jsx'
import UserAuthProvider from './useHooks/UserAuthProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserAuthProvider>
    <DoctorDataProvider>
      <App />
    </DoctorDataProvider>
  </UserAuthProvider>
)
