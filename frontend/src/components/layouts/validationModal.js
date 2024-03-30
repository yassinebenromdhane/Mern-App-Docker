import React from "react";

const ValidationModal = (props) => {
  return (
    <div className="warning-modal">
      <div
        className="modal fade"
        id={"Modal" + props.userId}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content card-style warning-card text-center">
            <div className="modal-body">
              <div className="icon text-danger mb-20">
                <i className="lni lni-warning" />
              </div>
              <div className="content mb-30">
                <h2 className="mb-15">Warning!</h2>
                <p className="text-sm text-medium">
                  Are you sure you want to delete this user?
                </p>
              </div>
              <div className="action d-flex flex-wrap justify-content-center">
                <button data-bs-dismiss="modal" className="main-btn mr-5">
                  Cancel
                </button>
                <button
                  data-bs-dismiss="modal"
                  className="main-btn  text-danger ml-5"
                  onClick={() => {
                    props.handleDelete(props.userId);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationModal;
