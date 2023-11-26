import React from "react";
import { useSelector } from "react-redux";
import { getUsersList } from "../../store/usersSlice";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper/modules";

const UsersSlider = (props) => {
  const usersList = useSelector(getUsersList());
  const { userId } = useParams();

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const newArray = usersList?.filter((user) => user._id !== userId);
    setUsers(newArray);
  }, [usersList]);

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="swiper-users">
      <Swiper
        scrollbar={{
          hide: true
        }}
        modules={[Scrollbar]}
        slidesPerView={6.5}
        spaceBetween={10}
        className="mySwiper"
      >
        {users &&
          users.map((user) => (
            <SwiperSlide key={user._id}>
              <div className={styles.swiperWrapperItem}>
                <a
                  href="#"
                  onClick={(e) => handleClick(e)}
                  title={user.name}
                  className={styles.customUsersCircle}
                >
                  {Array.from(user.name)[0]}
                </a>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default UsersSlider;
