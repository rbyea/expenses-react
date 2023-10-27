import React from "react";
import { FaUserEdit } from "react-icons/fa";

const ProfileBlock = (props) => {
  return (
    <div className="custom-block custom-block-profile-front custom-block-profile text-center bg-white">
      <div className="custom-block-profile-image-wrap mb-4">
        <img
          src="images/medium-shot-happy-man-smiling.jpg"
          className="custom-block-profile-image img-fluid"
          alt=""
        />

        <a
          href="setting"
          className="bi-pencil-square custom-block-edit-icon"
        ><FaUserEdit/></a>
      </div>

      <p className="d-flex flex-wrap mb-2">
        <strong>Имя:</strong>

        <span>Thomas Edison</span>
      </p>

      <p className="d-flex flex-wrap mb-2">
        <strong>Email:</strong>

        <a href="mailto:thomas@site.com">thomas@site.com</a>
      </p>

      <p className="d-flex flex-wrap mb-0">
        <strong>Телефон:</strong>

        <a href="tel:(60) 12 345 6789">(60) 12 345 6789</a>
      </p>
    </div>
  );
};

export default ProfileBlock;
