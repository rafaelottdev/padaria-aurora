import { Outlet } from 'react-router'
import './App.css'

import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'

function App() {
  return (
    <>
      <div className='page-container'>
        <Header />

        <Outlet />

        <Footer />
      </div>
    </>
  )
}

export default App
