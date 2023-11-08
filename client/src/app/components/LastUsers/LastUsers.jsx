import React from "react";
import UsersSlider from "../Slider/UsersSlider";

const LastUsers = (props) => {
  return (
    <div className="custom-block primary-bg last-users">
      <h5 className="text-white mb-4">Пользователи</h5>

      <UsersSlider />
    </div>
  );
};

export default LastUsers;
