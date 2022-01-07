import { Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
// import Login from "./Pages/Login/Login";
import Public from "./Routes/Public";
import Private from "./Routes/Private";
import Reg from "./Pages/Reg/Reg";
// import Queue from "./Pages/Queue/Queue";
// import AdminReg from "./Pages/AdminReg/AdminReg";
// import AdminRoute from "./Routes/AdminRoute";
// import Admin from "./Pages/Admin/Admin";
// import AdminUsers from "./Pages/Admin/AdminUsers";
// import Order from "./Pages/Order/Order";

function App() {
  return (
    <>
      <div className="container">
        <Switch>
          {/* <Public exact path="/login" component={Login} /> */}
          <Public exact path="/reg" component={Reg} />
          <Private exact path="/" component={Home} />
          {/* <Public exact path="/adminreg" component={AdminReg} /> */}
          {/* <Private exact path="/queue" component={Queue} /> */}
         
        </Switch>
      </div>
    </>
  );
}

export default App;