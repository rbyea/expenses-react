import React from "react";
import Header from "./components/Header/Header";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ProtectedRoute from "./ui/ProtectedRoute";
import LoaderUser from "./ui/hoc/loaderUser";

function App() {
  const { pathname } = useLocation();

  return (
    <LoaderUser>
      <div className="App">
        <Header />

        <div className="container-fluid">
          <div className="row">
            {pathname !== "/login" && pathname !== "/login/register" && (
              <SidebarMenu />
            )}
            <Switch>
              <ProtectedRoute path="/wallet/:userId?" component={Wallet} />
              <ProtectedRoute path="/settings/:userId?" component={Settings} />
              <Route path="/login/:type?" component={Login} />
              <ProtectedRoute exact path="/:userId?" component={Main} />
            </Switch>
          </div>
        </div>
      </div>
    </LoaderUser>
  );
}

export default App;
