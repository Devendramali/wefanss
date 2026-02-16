
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Layout from './Layout'
import Profile from './pages/Profile'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
