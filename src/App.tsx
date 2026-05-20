import { Outlet } from 'react-router'
import './App.css'

import Header from './layout/Header/Header'
import Footer from './layout/Footer/Footer'

function App() {
  return (
    <>
      <div className='page-container'>
        <Header />

        <div  className="section_container">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default App
