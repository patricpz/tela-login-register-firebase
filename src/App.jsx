import { useState } from 'react'
import './App.css'
import SignIn from './components/login/login'
import SignUp from './components/registro/register'
import RoutesApp from './components/rotas/routes'

function App() {

  return (
    <>
      <div>
        <RoutesApp />
      </div>
    </>
  )
}

export default App
