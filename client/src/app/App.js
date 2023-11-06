import React from "react";
import Header from "./components/Header/Header";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
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

      <div className="container-fluid">
        <div className="row">
          {pathname !== "/login" && pathname !== "/login/register" && (
            <SidebarMenu />
          )}
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/wallet" component={Wallet} />
            <Route path="/settings" component={Settings} />
            <Route path="/login/:type?" component={Login} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
