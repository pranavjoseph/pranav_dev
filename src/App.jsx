import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/Home'
import PageNotFound from './pages/404';

function App() {
  const isProduction = import.meta.env.PROD;
  const basename = isProduction ? '/pranav_dev' : '/';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
