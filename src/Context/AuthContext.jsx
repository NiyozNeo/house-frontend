import { createContext, useState, useEffect } from "react";
import { Redirect } from "react-router";

const Context = createContext();

const Provider = ({ children }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  useEffect(() => {
    console.log(token);
    if (token) {
      fetch(`http://localhost:4000/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (!data || !data.message) {
            <Redirect to="/reg" />;
          }
        })
        .catch((err) => {
          console.log(err);
          <Redirect to="/reg" />;
        });
    } else {
      <Redirect to="/reg" />;
    }
  }, [token]);

  return (
    <>
      <Context.Provider value={{ token, setToken }}>
        {children}
      </Context.Provider>
    </>
  );
};

export { Context, Provider };