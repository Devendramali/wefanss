
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './Layout'
import Profile from './pages/Profile'
import JayaBachhan from './pages/JayaBachhan'
import EknathShinde from './pages/EknathShinde'
import Categories from './pages/Categories'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profile />} />
          <Route path="/jaya-bachhan" element={<JayaBachhan />} />
          <Route path="/eknath-shinde" element={<EknathShinde />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
