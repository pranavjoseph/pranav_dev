import { BrowserRouter, Route, Routes, useNavigate } from 'react-router'
import { useEffect } from 'react';
import './App.css'
import HomePage from './pages/Home'
import PageNotFound from './pages/404';


function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const path = params.get("p");
    if (path) {
      navigate(path, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  const isProduction = import.meta.env.PROD;
  const basename = isProduction ? '/pranav_dev' : '/';

  return (
    <BrowserRouter basename={basename}>
      <RedirectHandler />
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
