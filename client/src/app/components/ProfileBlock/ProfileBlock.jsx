import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getCurrentUser } from "../../store/usersSlice";
import Preloader from "../../ui/Preloader/Preloader";
import styles from "./profileBlock.module.css";

const ProfileBlock = (props) => {
  const { userId } = useParams();
  const currentUser = useSelector(getCurrentUser(userId));

  const stylesBlock = {
    position: "relative",
    minHeight: "293px"
  };

  return (
    <>
      <div
        style={stylesBlock}
        className="custom-block custom-block-profile-front custom-block-profile text-center bg-white"
      >
        {!currentUser && <Preloader />}
        {currentUser && (
          <>
            <div className="custom-block-profile-image-wrap mb-4">
              <div className={styles.customBlockImageCircle}>
                {Array.from(currentUser.name)[0]}
              </div>

              <Link
                to={`settings/${userId}`}
                className="bi-pencil-square custom-block-edit-icon"
              >
                <FaUserEdit />
              </Link>
            </div>

            <p className="d-flex flex-wrap mb-2">
              <strong>Имя:</strong>

              <span>{currentUser.name}</span>
            </p>

            <p className="d-flex flex-wrap mb-2">
              <strong>Email:</strong>

              <a href={`mailto:${currentUser.email}`}>{currentUser.email}</a>
            </p>

            <p className="d-flex flex-wrap mb-0">
              <strong>Телефон:</strong>

              <a href={`tel:${currentUser.phone}`}>{currentUser.phone}</a>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ProfileBlock;
