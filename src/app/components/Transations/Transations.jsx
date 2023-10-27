import React from "react";
import { FaFolderOpen } from "react-icons/fa";

const Transations = (props) => {
  return (
    <>
      <div className="custom-block custom-block-transations">
        <h5 className="mb-4">Недавние транзакции</h5>

        <div className="d-flex flex-wrap align-items-center mb-4">
          <div className="d-flex align-items-center">
            <img
              src="images/profile/senior-man-white-sweater-eyeglasses.jpg"
              className="profile-image img-fluid"
              alt=""
            />

            <div>
              <p>
                <a href="transation-detail">Daniel Jones</a>
              </p>

              <small className="text-muted">C2C Transfer</small>
            </div>
          </div>

          <div className="ms-auto">
            <small>05/12/2023</small>
            <strong className="d-block text-danger">
              <span className="me-1">-</span> $250
            </strong>
          </div>
        </div>

        <div className="d-flex flex-wrap align-items-center mb-4">
          <div className="d-flex align-items-center">
            <img
              src="images/profile/young-beautiful-woman-pink-warm-sweater.jpg"
              className="profile-image img-fluid"
              alt=""
            />

            <div>
              <p>
                <a href="transation-detail">Public Bank</a>
              </p>

              <small className="text-muted">Mobile Reload</small>
            </div>
          </div>

          <div className="ms-auto">
            <small>22/8/2023</small>
            <strong className="d-block text-success">
              <span className="me-1">+</span> $280
            </strong>
          </div>
        </div>

        <div className="d-flex flex-wrap align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="images/profile/young-woman-with-round-glasses-yellow-sweater.jpg"
              className="profile-image img-fluid"
              alt=""
            />

            <div>
              <p>
                <a href="transation-detail">Store</a>
              </p>

              <small className="text-muted">Payment Received</small>
            </div>
          </div>

          <div className="ms-auto">
            <small>22/8/2023</small>
            <strong className="d-block text-success">
              <span className="me-1">+</span> $280
            </strong>
          </div>
        </div>

        <div className="border-top pt-4 mt-4 text-center">
          <a className="btn custom-btn" href="wallet">
            Просмотреть все транзакции
            <FaFolderOpen />
          </a>
        </div>
      </div>
    </>
  );
};

export default Transations;
