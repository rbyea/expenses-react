import React from "react";
import { useSelector } from "react-redux";
import { getUsersList } from "../../store/usersSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const UsersSlider = (props) => {
  const usersList = useSelector(getUsersList());
  const { userId } = useParams();

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const newArray = usersList?.filter((user) => user._id !== userId);
    setUsers(newArray);
    console.log(users);
  }, [usersList]);

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        slidesPerView={6.5}
        spaceBetween={10}
        className="mySwiper"
      >
        {users &&
          users.map((user) => (
            <SwiperSlide key={user._id}>
              <div className={styles.swiperWrapperItem}>
                <a href="#" className={styles.customUsersCircle}>
                  {Array.from(user.name)[0]}
                </a>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default UsersSlider;
