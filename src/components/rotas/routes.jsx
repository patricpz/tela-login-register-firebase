import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '../login/login';
import SignUp from '../registro/register';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
