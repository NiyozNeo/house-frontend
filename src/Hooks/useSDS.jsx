import { useEffect, useState } from "react";
function useHome(params) {
  const [reg, setReg] = useState([]);
  useEffect(() => {
    if (reg) {
      fetch(`https://home-server-neo.herokuapp.com/home`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reg),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, [reg]);

  if (params === "post") {
    return [setReg];
  }
}

export default useHome;
