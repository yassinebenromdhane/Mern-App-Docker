import React,{useState} from "react";
import ValidationModal from "../layouts/validationModal";
import { deleteUserById, updateUserById, getUserById } from "../../services/userService";
import EditModal from "../layouts/editModal";
const TableItems = (props) => {
  const [user, setUser] = useState({});
  // Delete user by id
  const handleDelete = async (id) => {
    await deleteUserById(id)
      .then((response) => {
        props.getUsers();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Update user by id
  const handleUpdate = async (id, user) => {
    await updateUserById(id, user)
      .then((response) => {
        props.getUsers();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Get user by id
  const getUser = async (id) => {
    await getUserById(id)
      .then((response) => {
        setUser(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <tr key={props.key}>
        <td>
          <div className="lead">
            <div className="lead-image">
              {!props.image ? (
                <img src={props.avatar} alt="" />
              ) : (
                <img src={props.image} alt="" />
              )}
            </div>
          </div>
        </td>
        <td>
          <div className="lead-text">
            <p>{props.username}</p>
          </div>
        </td>
        <td>
          <p>
            <a href="tables-responsive.html#0">{props.email}</a>
          </p>
        </td>

        <td>
          <span
            className={
              props.roles === "admin"
                ? "lead-text main-badge danger-badge-light"
                : props.roles === "backer"
                ? "lead-text main-badge warning-badge-light"
                : "lead-text main-badge success-badge-light"
            }
          >
            {props.roles}
          </span>
        </td>
        <td>
          <div className="lead-text">
            {props.isVerified ? (
              <img
                src="https://res.cloudinary.com/dtqlml3ha/image/upload/v1698506334/MERN%20PROJECT/kgarhbfnavkh7t4es3hx.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            ) : (
              <img
                src="https://res.cloudinary.com/dtqlml3ha/image/upload/v1698506492/MERN%20PROJECT/tdbxiciedpuigh9idt6v.png"
                alt=""
                style={{ width: "20px", height: "20px" }}
              />
            )}
          </div>
        </td>
        <td>
          <div className="action">
            <button
              className="text-success"
              onClick={() => {
                props.handleIsVerified(props.id);
              }}
            >
              <i className="lni lni-checkmark" />
            </button>
            <button
              className="text-info"
              data-bs-toggle="modal"
              data-bs-target={"#editModal" + props.id}
              onClick={() => {
                getUser(props.id);
              }}
            >
              <i className="lni lni-pencil" />
            </button>
            <button
              className="text-danger"
              data-bs-toggle="modal"
              data-bs-target={"#Modal" + props.id}
            >
              <i className="lni lni-trash-can" />
            </button>
          </div>
        </td>
      </tr>
      <ValidationModal handleDelete={handleDelete} userId={props.id} />
      <EditModal handleUpdate={handleUpdate} user={user} userId={props.id} />
    </>
  );
};

export default TableItems;
