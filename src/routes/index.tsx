import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import CalorieCounter from '../pages/CalorieCounter';
import DietPlans from '../pages/DietPlans';
import ExercisePlan from '../pages/ExercisePlan';
import Home from '../pages/Home';
import News from '../pages/News';
import NewsSingle from '../pages/NewsSingle'
import Disease from '../pages/Disease'
import Faq from '../pages/Faq'
// import PageNotFound from '../pages/PageNotFound';

type Props = {};

const Router: React.FC = (props: Props) => {

    const isLoggedIn = localStorage.getItem('isLoggedIn')

  return(
    <Routes>
        {isLoggedIn !== 'true' && <Route path="/login" element={<Login />} />}
        {isLoggedIn !== 'true' && <Route path="/register" element={<Signup />} />}
        <Route path="/exerciseplans" element={<ExercisePlan />} />
        <Route path="/news" element={<News />} />
        <Route path="/newssingle" element={<NewsSingle />} />
        <Route path="/diseases" element={<Disease />} />
        <Route path="/dietplans" element={<DietPlans />} />
        <Route path="/caloriecounter" element={<CalorieCounter />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={isLoggedIn === 'true' && <Navigate to="/" replace />} />
    </Routes>
  )
};
export default Router;
