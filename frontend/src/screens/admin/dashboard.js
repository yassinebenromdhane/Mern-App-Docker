import React from 'react'
import SideBar from '../../components/layouts/sideBar'
import NavBar from '../../components/layouts/navBar';
import Footer from '../../components/layouts/footer';
import MainScreen from '../../components/dashboard/mainScreen';
const Dashboard = () => {
  return (
    <>
      <SideBar />
      <main className="main-wrapper">
      <NavBar/>
      <MainScreen/>
      <Footer/>
      </main>
    </>
  );
}

export default Dashboard
