import React from "react";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUser,
  getUserError,
  updateProfileUser
} from "../store/usersSlice";
import { validator } from "../utils/validator";
import InputField from "../ui/Form/InputField";
import { toast } from "react-toastify";

const Settings = (props) => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const currentUser = useSelector(getCurrentUser(userId));
  const statusError = useSelector(getUserError());

  console.log(statusError);

  const [error, setError] = React.useState({});

  console.log("error", error);

  const [data, setData] = React.useState({
    userId: currentUser?._id || userId || "",
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || ""
  });

  const validatorConfig = {
    name: {
      isRequired: {
        message: "Поле обязательна для заполнения!"
      }
    },
    email: {
      isRequired: {
        message: "Поле обязательна для заполнения!"
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    try {
      dispatch(updateProfileUser(data));
      toast.success("Данные обновлены!", {
        autoClose: 3000
      });
    } catch (error) {
      toast.error("Произошла ошибка!", {
        autoClose: 3000
      });
    }
  };

  const handleReset = (e) => {
    e.preventDefault();

    setData((prevState) => ({
      ...prevState,
      name: "",
      email: "",
      phone: ""
    }));
  };
  return (
    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
      <div className="title-group mb-3">
        <h1 className="h2 mb-0">Настройки</h1>
      </div>

      <div className="row my-4">
        <div className="col-lg-7 col-12">
          <div className="custom-block bg-white">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active">Профиль</button>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="profile-tab-pane">
                <h6 className="mb-4">Профиль пользователя</h6>

                <form
                  className="custom-form profile-form"
                  onSubmit={onSubmitForm}
                >
                  <InputField
                    type="text"
                    name="name"
                    placeholder="Ваше Имя"
                    value={data.name}
                    error={error.name}
                    onChange={handleChange}
                  />

                  <InputField
                    type="email"
                    name="email"
                    placeholder="Ваша почта"
                    value={data.email}
                    error={error.email}
                    onChange={handleChange}
                  />

                  <InputField
                    type="number"
                    name="phone"
                    placeholder="Ваш номер телефона"
                    value={data.phone}
                    error={error.phone}
                    onChange={handleChange}
                  />

                  {/* <div className="input-group mb-1">
                    <img
                      src="images/profile/senior-man-white-sweater-eyeglasses.jpg"
                      className="profile-image img-fluid"
                      alt=""
                    />

                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                    />
                  </div> */}

                  <div className="d-flex">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="form-control me-3"
                    >
                      Сброс
                    </button>

                    <button type="submit" className="form-control ms-2">
                      Обновить
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Settings;
