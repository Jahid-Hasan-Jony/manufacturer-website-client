import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import LogInPage from './Components/LogInPage/LogInPage';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Secret from './Components/Secret/Secret';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import RequireAuth from './RequireAuth';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App relative">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/secret' element={<RequireAuth>
          <Secret />
        </RequireAuth>} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div >
  );
}

export default App;
