import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import LogInPage from './Components/LogInPage/LogInPage';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import RequireAuth from './RequireAuth';
import Navbar from './Components/Navbar/Navbar';
import DeshBoard from './Components/DeshBoard/DeshBoard';
import MyProfile from './Components/DeshBoard/MyProfile/MyProfile';
import MyOrders from './Components/DeshBoard/MyOrders/MyOrders';
import AddReview from './Components/DeshBoard/AddReview/AddReview';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import Blogs from './Components/Blogs/Blogs';
import PurchasePage from './Components/PurchasePage/PurchasePage';
import MakeAdminPage from './Components/MakeAdminPage/MakeAdminPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/purchasePage/:id' element={
          <RequireAuth>
            <PurchasePage />
          </RequireAuth>
        } />
        <Route path='/deshboard' element={<RequireAuth>
          <DeshBoard />
        </RequireAuth>}>
          <Route index element={<MyProfile />} />
          <Route path='myOrders' element={<MyOrders />} />
          <Route path='addReview' element={<AddReview />} />
          <Route path='makeAdmin' element={<MakeAdminPage />} />
        </Route>

        <Route path='/myPortfolio' element={<MyPortfolio />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </div >
  );
}

export default App;
