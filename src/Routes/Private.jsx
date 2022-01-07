import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Private = ({ path, component, exact }) => {
  const [token] = useAuth();

  if (token) {
    return <Route path={path} component={component} exact={exact} />;
  }
  return <Redirect to="/reg" />;
};
export default Private;