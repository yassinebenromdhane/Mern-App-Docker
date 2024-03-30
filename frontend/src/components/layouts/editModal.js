import React from 'react'

const EditModal = (props) => {
  return (
    <div className="add-task-modal">
      <div
        className="modal fade"
        id={"editModal" + props.userId}
        tabIndex={-1}
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="row gx-0">
                <div className="col-lg-8">
                  <div className="task-modal-left">
                    <h5 className="modal-title">Update User</h5>
                    {/* <div className="select-style-1">
                      <label>Select Project</label>
                      <div className="select-position">
                        <select className="light-bg">
                          <option value="">Select Project</option>
                          <option value="">Tailgrids</option>
                          <option value="">Graygrids</option>
                          <option value="">Tailwind templates</option>
                        </select>
                      </div>
                    </div> */}
                    <div className="input-style-1">
                      <label>Cin</label>
                      <input
                        type="number"
                        placeholder="Enter Cin"
                        value={props.user.cin}
                      />
                    </div>
                    <div className="input-style-1">
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter Full name"
                        value={props.user.fullName}
                      />
                    </div>
                    <div className="input-style-1">
                      <label>Username</label>
                      <input
                        type="text"
                        placeholder="Enter Username"
                        value={props.user.username}
                      />
                    </div>
                    <div className="input-style-1">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Enter email"
                        value={props.user.email}
                      />
                    </div>
                    <div className="input-style-1">
                      <label>Description</label>
                      <textarea
                        placeholder="Description"
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="task-modal-right">
                    <button
                      type="button"
                      className="border-0 bg-transparent ms-auto close-button"
                      data-bs-dismiss="modal"
                    >
                      <svg
                        width={26}
                        height={26}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9999 13.2324L21.1874 7.04492L22.9549 8.81242L16.7674 14.9999L22.9549 21.1874L21.1874 22.9549L14.9999 16.7674L8.81242 22.9549L7.04492 21.1874L13.2324 14.9999L7.04492 8.81242L8.81242 7.04492L14.9999 13.2324Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <div className="select-style-1">
                      <label>Priority</label>
                      <div className="select-position">
                        <select className="light-bg">
                          <option value="">Select Priority</option>
                          <option value="">Low</option>
                          <option value="">Medium</option>
                          <option value="">High</option>
                        </select>
                      </div>
                    </div>
                    <div className="select-style-1">
                      <label>Assign To</label>
                      <div className="select-position">
                        <select className="light-bg">
                          <option value="">Assign to</option>
                          <option value="">Shafiq Hammad</option>
                          <option value="">Naimur Rahman</option>
                          <option value="">Mahbub Hasan</option>
                        </select>
                      </div>
                    </div>
                    <div className="input-style-1">
                      <label>Due Date</label>
                      <input
                        className="light-bg"
                        type="date"
                        placeholder="Enter Title"
                      />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <button
                          type="button"
                          data-bs-dismiss="modal"
                          className="btn btn-danger w-100"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="col-6">
                        <button
                          type="button"
                          data-bs-dismiss="modal"
                          className="btn btn-primary w-100"
                        >
                          <i className="lni lni-plus me-1 text-sm text-bold" />
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal
