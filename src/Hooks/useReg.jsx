import { useEffect, useState } from "react";

function useCourse(params) {
  const [reg, setReg] = useState([]);

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
