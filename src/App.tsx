
import './App.css'
import LandingPage from './components/Home Page/LandingPage'
import { Route, Routes } from 'react-router'
import AppLayout from './components/AppLayout'
import GallerySection from './components/Home Page/GallerySection'
import FeaturedProduct from './components/Home Page/FeaturedProduct'

function App() {

  return (
    <>
    <div className="relative overflow-hidden">
      <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={
          <>
           <LandingPage />
            <div className="mt-32 flex flex-col gap-20 sm:mt-44 md:mt-64 xl:mt-60 mb-52 xl:gap-40">
              <GallerySection />
              <FeaturedProduct />
            </div>
           
          </>
          } />

         <Route  path="/about" element={
        <></>
      } />

      <Route  path="/menu" element={
        <></>
      } />

      <Route  path="/contacts" element={
        <></>
      } />
      </Route>

      
    </Routes>
    </div>
    </>
  )
}

export default App
