import React from "react";
import Header from "./components/Header/Header";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Main from "./pages/Main";
import { Route, Switch } from "react-router-dom";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container-fluid">
        <div className="row">
          <SidebarMenu />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/wallet" component={Wallet} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
