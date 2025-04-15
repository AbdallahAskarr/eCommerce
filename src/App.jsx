
import { Outlet } from 'react-router-dom'
import './App.css'


import NavbarItem from './Component/NavbarItem'
import Footer from './Component/Footer'



function App() {


  return (
    <>

      <NavbarItem />
      <div className='min-vh-100' >
        <Outlet />

      </div>
      <Footer />
    </>
  )
}

export default App
