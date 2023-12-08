import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../login/login';
import SignUp from '../registro/register';
import HomePage from '../pages/homepage/HomePage';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path='/homepage' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
