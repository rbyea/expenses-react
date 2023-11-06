import React from "react";
import Header from "./components/Header/Header";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import LoaderUser from "./ui/hoc/loaderUser";
import ProtectedRoute from "./ui/ProtectedRoute";
// import { useDispatch } from "react-redux";
// import { loadUsersList } from "./store/usersSlice";

function App() {
  const { pathname } = useLocation();

  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(loadUsersList());
  // }, []);

  return (
    <div className="App">
      <Header />

      <LoaderUser>
        <div className="container-fluid">
          <div className="row">
            {pathname !== "/login" && pathname !== "/login/register" && (
              <SidebarMenu />
            )}
            <Switch>
              <ProtectedRoute path="/wallet" component={Wallet} />
              <ProtectedRoute path="/settings" component={Settings} />
              <Route path="/login/:type?" component={Login} />
              <ProtectedRoute exact path="/" component={Main} />
            </Switch>
          </div>
        </div>
      </LoaderUser>
    </div>
  );
}

export default App;
