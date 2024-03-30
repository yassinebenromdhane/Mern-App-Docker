import React from "react";
import SideBar from "../../components/layouts/sideBar";
import NavBar from '../../components/layouts/navBar';
import UsersComponent from "../../components/users/users";
import Footer from "../../components/layouts/footer";

const Users = () => {
  return (
    <>
      <SideBar />
      <main className="main-wrapper">
        <NavBar />
        <UsersComponent />
        <Footer />
      </main>
    </>
  );
};

export default Users;
