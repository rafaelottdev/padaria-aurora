import { Outlet } from 'react-router'
import './App.css'

import Header from './layout/Header/Header'

function App() {
  return (
    <>
      <div className='page-container'>
        <Header />

        <Outlet />
      </div>
    </>
  )
}

export default App
