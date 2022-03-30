import './App.css';
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import MainPage from './pages/Mainpage';
import DirectMassagePage from './pages/DirectMassagePage';
import ExplorePage from './pages/ExplorePage';


const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-max bg-gray-50'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}></Route>
          <Route path='direct' element={<DirectMassagePage />}></Route>
          <Route path='explore' element={<ExplorePage />}></Route>
        </Route>
      </Routes>

    </div>
  );
};
