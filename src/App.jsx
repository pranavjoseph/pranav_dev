import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
