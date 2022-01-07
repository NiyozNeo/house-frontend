import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Context } from "../Context/AuthContext";
function useCourse(params) {
  const [reg, setReg] = useState([]);
  const { token, setToken } = useContext(Context);
  useEffect(() => {
    if (reg) {
      fetch(`http://localhost:4000/reg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reg),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem("token", data.token);
            setToken(data.token)
          }
        })
        .catch((err) => console.log(err));
    }
  }, [reg]);

  if (params === "post") {
    return [setReg];
  }
}

export default useCourse;
