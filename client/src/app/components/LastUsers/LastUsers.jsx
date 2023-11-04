import React from "react";

const LastUsers = (props) => {
  return (
    <div className="custom-block primary-bg">
      <h5 className="text-white mb-4">Пользователи</h5>

      <a href="#">
        <img
          src="images/profile/young-woman-with-round-glasses-yellow-sweater.jpg"
          className="profile-image img-fluid"
          alt=""
        />
      </a>

      <a href="#">
        <img
          src="images/profile/young-beautiful-woman-pink-warm-sweater.jpg"
          className="profile-image img-fluid"
          alt=""
        />
      </a>

      <a href="#">
        <img
          src="images/profile/senior-man-white-sweater-eyeglasses.jpg"
          className="profile-image img-fluid"
          alt=""
        />
      </a>
    </div>
  );
};

export default LastUsers;
