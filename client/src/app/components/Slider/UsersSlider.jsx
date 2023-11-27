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
        breakpoints={{
          320: {
            slidesPerView: 2.5
          },
          340: {
            slidesPerView: 3.5
          },
          550: {
            slidesPerView: 4.5
          },
          990: {
            slidesPerView: 2.5
          },
          1060: {
            slidesPerView: 2.5
          },
          1200: {
            slidesPerView: 3.5
          },
          1350: {
            slidesPerView: 4.5
          },
          1400: {
            slidesPerView: 4.5
          },
          1556: {
            slidesPerView: 5.5
          },
          1696: {
            slidesPerView: 6.5
          }
        }}
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
                  {user.profileImage ? (
                    <>
                      <img
                        title={user.name}
                        alt={user.name}
                        src={user.profileImage}
                      />
                    </>
                  ) : (
                    Array.from(user.name)[0]
                  )}
                </a>
                <span className={styles.swiperName}>{user.name.slice(0, 4)}</span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default UsersSlider;
