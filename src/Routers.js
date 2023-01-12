import { Routes, Route } from 'react-router-dom';

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from './pages/register/RegisterPage';

export default function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage />}/>
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
    )
}