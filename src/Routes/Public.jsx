import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const Public = ({ path, component }) => {
  const [token] = useAuth();
  if(token) {
    return <Redirect to="/" />
  }
  return <Route path={path} component={component} />;
};
export default Public;