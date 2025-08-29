import { BrowserRouter, Route, Routes, useNavigate } from 'react-router'
import { useEffect } from 'react';
import './App.css'
import HomePage from './pages/Home'
import PageNotFound from './pages/404';
import { BASE_URL } from './utils/constants';
import ContactPage from './pages/Contact';


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

  return (
    <BrowserRouter basename={BASE_URL}>
      <RedirectHandler />
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
