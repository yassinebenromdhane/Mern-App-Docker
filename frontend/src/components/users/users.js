import React, { useEffect, useMemo, useState } from "react";
import TableItems from "./tableItems";
import { getAllUsers, updateIsVerified } from "../../services/userService";
import CustomLoader from "../layouts/customLoader";
const UsersComponent = () => {
  const [users, setUsers] = useState([]); // users = []
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false); // isLoading = true
  const [isVerified, setIsVerified] = useState(false);

  const filteredData = users.filter((item) => {
    // Customize this logic based on your data structure
    return (
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const avatar =
    "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg";
  // get all users from the database using the getAllUsers service
  const getUsers = async () => {
    setIsLoading(true);
    getAllUsers()
      .then((response) => {
        setUsers(response.data); // users = response.data
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useMemo(() => {
    getUsers();
  }, []);

  const handleIsVerified = async (id) => {
    await updateIsVerified(id)
      .then((response) => {
        getUsers();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="table-components">
      <div className="container-fluid">
        {/* ========== title-wrapper start ========== */}
        <div className="title-wrapper pt-30">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title">
                <h2>Users List</h2>
              </div>
            </div>
            {/* end col */}
            <div className="col-md-6">
              <div className="breadcrumb-wrapper">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="tables-responsive.html#0">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Users
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* ========== title-wrapper end ========== */}
        {/* ========== tables-wrapper start ========== */}
        <div className="tables-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-style mb-30">
                {/* <h4 className="mb-3">This is the list of users</h4> */}
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                  {/* <div className="left">
                    <p>
                      Show <span>10</span> entries
                    </p>
                  </div> */}
                  <div className="right">
                    <div className="table-search d-flex">
                      <form action="tables-responsive.html#">
                        <input
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={handleSearch}
                        />
                        <button>
                          <i className="lni lni-search-alt" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="table-wrapper table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="lead-info">
                          <h6>Picture</h6>
                        </th>
                        <th className="lead-info">
                          <h6>Username</h6>
                        </th>
                        <th className="lead-email">
                          <h6>Email</h6>
                        </th>
                        <th className="lead-email">
                          <h6>Role</h6>
                        </th>
                        <th className="lead-email">
                          <h6>Status</h6>
                        </th>
                        <th>
                          <h6>Actions</h6>
                        </th>
                      </tr>
                      {/* end table row*/}
                    </thead>
                    <tbody>
                      {isLoading && (
                        <tr>
                          <td colSpan="6">
                            <div className="d-flex justify-content-center">
                              <CustomLoader />
                            </div>
                          </td>
                        </tr>
                      )}
                      {filteredData.map((props) => (
                        <TableItems
                          key={props._id}
                          id={props._id}
                          avatar={avatar}
                          image={props.image}
                          username={props.username}
                          email={props.email}
                          roles={props.roles}
                          isVerified={props.isVerified}
                          handleIsVerified={handleIsVerified}
                          getUsers={getUsers}
                        />
                      ))}
                    </tbody>
                  </table>
                  {/* end table */}
                </div>
                {/* <div className="pt-10 d-flex flex-wrap gap-3 justify-content-between">
                  <div className="left">
                    <p className="text-sm text-gray">
                      Showing {users.length}/30 products
                    </p>
                  </div>
                  <div className="right table-pagination">
                    <ul className="d-flex justify-content-end align-items-center gap-2">
                      <li>
                        <a href="tables-responsive.html#0">
                          <i className="lni lni-angle-double-left" />
                        </a>
                      </li>
                      <li>
                        <a href="tables-responsive.html#0"> 1 </a>
                      </li>
                      <li>
                        <a href="tables-responsive.html#0" className="active">
                          {" "}
                          2{" "}
                        </a>
                      </li>
                      <li>
                        <a href="tables-responsive.html#0"> 3 </a>
                      </li>
                      <li>
                        <a href="tables-responsive.html#0"> 4 </a>
                      </li>
                      <li>
                        <a href="tables-responsive.html#0">
                          <i className="lni lni-angle-double-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              {/* end card */}
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* ========== tables-wrapper end ========== */}
      </div>
      {/* end container */}
    </section>
  );
};

export default UsersComponent;
