import React from "react";
import Header from "./components/Header/Header";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom";
import Wallet from "./pages/History";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ProtectedRoute from "./ui/ProtectedRoute";
import LoaderUser from "./ui/hoc/loaderUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { pathname } = useLocation();
  const [mobileMenuStatus, setMobileMenuStatus] = React.useState(false);

  const handleBurger = () => {
    setMobileMenuStatus(!mobileMenuStatus);
  };

  return (
    <LoaderUser>
      <div className="App">
        <Header
          mobileMenuStatus={mobileMenuStatus}
          setMobileMenuStatus={handleBurger}
        />

        <div className="container-fluid">
          <div className="row">
            {pathname !== "/login" && pathname !== "/login/register" && (
              <SidebarMenu
                setMobileMenuStatus={handleBurger}
                mobileMenuStatus={mobileMenuStatus}
              />
            )}
            <Switch>
              <ProtectedRoute path="/history/:userId?" component={Wallet} />
              <ProtectedRoute path="/settings/:userId?" component={Settings} />
              <Route path="/login/:type?" component={Login} />
              <ProtectedRoute exact path="/:userId?" component={Main} />
            </Switch>
          </div>
        </div>

        <ToastContainer />
      </div>
    </LoaderUser>
  );
}

export default App;
