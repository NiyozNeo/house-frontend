import { useEffect, useState } from "react";
import useReg from "../../Hooks/useReg";

function Home() {
  const [setReg] = useReg();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const inputs = document.querySelectorAll(".input");
    let course = {
      name: inputs[0].value,
      email: inputs[1].value,
      password: inputs[2].value,
    };
    setReg(course);
  };

  return (
    <>
      <div className="home-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="name"
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="email"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Home;