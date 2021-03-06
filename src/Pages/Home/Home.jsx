import { useEffect, useRef, useState } from "react";
import useHome from "../../Hooks/useSDS";

function Home() {
  const [devData, setDevdata] = useState();
  const [data, setData] = useState([]);
  const [comp, setComp] = useState([]);
  const [compdata, setcompdata] = useState();
  const [house, setHouse] = useState([]);
  const [houseData, sethouseData] = useState();
  const [banks, setBanks] = useState([]);
  const [bankData, setBankData] = useState();
  const [not, setNot] = useState();
  const asd = useRef();
  const [myhello, setmyhello] = useState();


  const [setReg] = useHome("post");
  useEffect(() => {
    fetch("https://home-server-neo.herokuapp.com/developer")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  function devChange() {
    const devId = document.querySelector(".dev").value;
    const devim = data.find((datam) => datam.developer_id == devId);
    setDevdata(devim);
    setHouse([]);
    sethouseData(null);
    setBanks([]);
    setBankData(null);
    fetch(`https://home-server-neo.herokuapp.com/complex`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let sdfsdf = data.filter((datas) => {
          return datas.complex_developer == devId;
        });
        setComp(sdfsdf);
      })
      .catch((err) => console.log(err));
  }

  function compChange() {
    const devId = document.querySelector(".comp").value;
    const devim = comp.find((datam) => datam.complex_id == devId);
    setcompdata(devim);
    fetch(`https://home-server-neo.herokuapp.com/house`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let sdfsdf = data.filter((datas) => {
          return datas.house_complex == devId;
        });
        setHouse(sdfsdf);
      })
      .catch((err) => console.log(err));
  }

  function uychange() {
    const devId = document.querySelector(".uy").value;
    const devim = house.find((datam) => datam.house_id == devId);
    sethouseData(devim);
    fetch(`https://home-server-neo.herokuapp.com/banks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let sdfsdf = data.filter((datas) => {
          return datas.bank_max >= devim.house_price;
        });
        if (sdfsdf.length === 0) {
          setNot(true);
        }
        setBanks(sdfsdf);
      })
      .catch((err) => console.log(err));
  }

  function bankchange() {
    const devId = document.querySelector(".bank").value;
    const devim = banks.find((datam) => datam.bank_id == devId);
    setBankData(devim);
  }

  function submitter(e) {
    e.preventDefault();
    const companiyasi = document.querySelector(".dev").value;
    const complexi = document.querySelector(".comp").value;
    const nechi = document.querySelector(".uy").value;
    const bank = document.querySelector(".bank").value;
    const one = data.find((datam) => datam.developer_id == companiyasi);
    const two = comp.find((datam) => datam.complex_id == complexi);
    const three = house.find((datam) => datam.house_id == nechi);
    const four = banks.find((datam) => datam.bank_id == bank);

    console.log(
      one.developer_title,
      two.complex_title,
      three.house_room,
      four.bank_name,
      asd.current.value
    );
      const msg = {
        dev: one.developer_title,
        comp: two.complex_title,
        price: three.house_room,
        bank: four.bank_name,
      }

      setReg({email:asd.current.value , msg})
    
  }
  return (
    <>
      <div className="home-wrapper">
        <form onSubmit={submitter}>
          <div className="ws">
            <select
              required
              className="dev"
              onChange={devChange}
              name="developer"
            >
              <option value="null" selected={true} disabled>
                campaniyalar
              </option>
              {data?.map((dev) => {
                return (
                  <option key={dev.developer_id} value={dev.developer_id}>
                    {dev.developer_title}
                  </option>
                );
              })}
            </select>
            {devData ? (
              <div>
                <img
                  width={300}
                  height={300}
                  src={devData.developer_img}
                  alt=""
                />
                <h2>{devData.developer_title}</h2>
                <a href={devData.developer_site}>
                  {devData.developer_site}
                </a>{" "}
                <br />
                <a href={`mailto:${devData.developer_email}`}>
                  {devData.developer_email}
                </a>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="ws">
            <select required className="comp" onChange={compChange} name="comp">
              <option value="null" selected={true} disabled>
                complexlar
              </option>
              {comp?.map((dev) => {
                return (
                  <option key={dev.complex_id} value={dev.complex_id}>
                    {dev.complex_title}
                  </option>
                );
              })}
            </select>

            {compdata ? (
              <div>
                <img
                  width={300}
                  height={300}
                  className="hello"
                  src={compdata.complex_img}
                  alt=""
                />
                <h2>{compdata.complex_title}</h2>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="ws">
            <select required className="uy" onChange={uychange} name="uy">
              <option value="null" selected={true} disabled>
                uylar
              </option>
              {house?.map((dev) => {
                return (
                  <option key={dev.house_id} value={dev.house_id}>
                    {dev.house_room}
                  </option>
                );
              })}
            </select>

            {houseData ? (
              <div>
                <img
                  width={300}
                  height={300}
                  className="hello"
                  src={houseData.house_img}
                  alt=""
                />
                <h2>{houseData.house_room} xona</h2>
                <p>{houseData.house_price} $</p>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="ws">
            <select required className="bank" onChange={bankchange} name="bank">
              <option value="null" selected={true} disabled>
                banks
              </option>
              {banks?.map((dev) => {
                return (
                  <option key={dev.bank_id} value={dev.bank_id}>
                    {dev.bank_name}
                  </option>
                );
              })}
            </select>

            {bankData ? (
              <div>
                <img
                  width={300}
                  height={300}
                  className="hello"
                  src={bankData.bank_img}
                  alt=""
                />
                <h2>{bankData.bank_name}</h2>
                <p>{bankData.bank_info}</p>
              </div>
            ) : not ? (
              <h2>hech qaysi bank buncha pul bermaydi</h2>
            ) : (
              ""
            )}
          </div>
          <input ref={asd} type="email" required />
          <button type="submit">submit</button>
          <h1>{myhello ? myhello : ""}</h1>
        </form>
      </div>
    </>
  );
}

export default Home;
