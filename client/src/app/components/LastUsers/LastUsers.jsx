import React from "react";
import { useSelector } from "react-redux";
import { getUsersList } from "../../store/usersSlice";
import styles from "./lastUsers.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const LastUsers = (props) => {
  const usersList = useSelector(getUsersList());
  const { userId } = useParams();

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const newArray = usersList?.filter((user) => user._id !== userId);
    setUsers(newArray);
    console.log(users);
  }, [usersList]);

  return (
    <div className="custom-block primary-bg">
      <h5 className="text-white mb-4">Пользователи</h5>

      <div className={styles.swiperWrapper}>
        {users &&
          users.map((user) => (
            <div key={user._id} className={styles.swiperWrapperItem}>
              <a href="#" className={styles.customUsersCircle}>
                {Array.from(user.name)[0]}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LastUsers;
