import { useState } from "react";
import "./index.css";

function Card(props) {
  const { elipse, facebook, instagram, telegram, github, linked } = props;

  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [telNum, setTelNum] = useState("");
  const [nationaly, setNationaly] = useState("uzbekistan");
  const [place, setPlace] = useState("");
  const [numberAdmin, setNumberAdmin] = useState(0);
  const [nationalySity, setNationalySity] = useState("tashkent");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);

  function validate() {
    if (companyName.length < 3) {
      alert("Kompaniya nomi kamida 3 ta belgidan iborat bo'lishi kerak.");
      return false;
    }
    if (email.length < 10) {
      alert("Email kamida 10 ta belgidan iborat bo'lishi kerak.");
      return false;
    }
    if (telNum.toString().length < 10 || isNaN(telNum)) {
      alert("togri yozing tel numerni");
      return false;
    }
    if (place === "" || typeof place !== "string") {
      alert("qayerda turasiz");
      return false;
    }
    if (numberAdmin <= 0) {
      alert("Hodimlar soni kopro notogri");
      return false;
    }
    if (desc.length < 15) {
      alert("izoh kopro yozing kerak");
      return false;
    }
    return true;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!validate()) return;

    const user = {
      companyName,
      email,
      telNum,
      place,
      nationaly,
      nationalySity,
      numberAdmin,
      desc,
      id: Date.now(),
    };

    setData([...data, user]);

    setCompanyName("");
    setEmail("");
    setTelNum("");
    setPlace("");
    setNationaly("uzbekistan");
    setNationalySity("tashkent");
    setNumberAdmin(0);
    setDesc("");
  }

  return (
    <div>
      <main>
        <div className="container">
          <div className="main">
            <h2>Kompaniya ma’lumotlari</h2>
            <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
            <div className="logo">
              <img src={elipse} alt="image" />
              <a href="#">Yuklash</a>
            </div>
            <label htmlFor="name">Kompaniya nomi *</label>
            <br />
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              id="name"
              placeholder="Kompaniya nomi"
            />
            <br />
            <label htmlFor="email">Email *</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Email"
            />
            <br />
            <label htmlFor="number">Telefon raqami *</label>
            <br />
            <input
              type="number"
              value={telNum}
              onChange={(e) => setTelNum(parseInt(e.target.value, 10) || "")}
              id="number"
              placeholder="UZ +9989"
            />
            <br />
            <label htmlFor="link">Linklar *</label>
            <br />
            <div className="img">
              <a href="https://www.linkedin.com/">
                <img src={linked} alt="linked image" />
              </a>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="instagram image" />
              </a>
              <a href="https://telegram.com">
                <img src={telegram} alt="telegram image" />
              </a>
              <a href="https://www.facebook.com/?locale=ru_RU">
                <img src={facebook} alt="facebook image" />
              </a>
              <a href="https://github.com">
                <img src={github} alt="github image" />
              </a>
            </div>
            <br />
            <div className="country">
              <div className="from">
                <label htmlFor="country">Davlatni tanlang:</label>
                <br />
                <select
                  id="country"
                  value={nationaly}
                  onChange={(e) => setNationaly(e.target.value)}
                  name="country"
                >
                  <option value="uzbekistan">O'zbekiston</option>
                  <option value="kazakhstan">Qozog'iston</option>
                  <option value="russia">Rossiya</option>
                  <option value="usa">AQSh</option>
                  <option value="ukraine">Ukraina</option>
                  <option value="turkey">Turkiya</option>
                  <option value="china">Xitoy</option>
                  <option value="india">Boshqa</option>
                </select>
              </div>
              <div className="sity">
                <label htmlFor="city">Shaharni tanlang:</label>
                <br />
                <select
                  id="city"
                  value={nationalySity}
                  onChange={(e) => setNationalySity(e.target.value)}
                  name="city"
                >
                  <option value="tashkent">Toshkent</option>
                  <option value="samarkand">Samarqand</option>
                  <option value="new_york">New York</option>
                  <option value="london">London</option>
                  <option value="beijing">Beijing</option>
                </select>
              </div>
            </div>
            <br />
            <label htmlFor="place">Yashash joyi *</label>
            <br />
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              id="place"
              placeholder="Joy"
            />
            <br />
            <label htmlFor="admin">Hodimlar soni *</label>
            <br />
            <input
              type="number"
              value={numberAdmin}
              onChange={(e) =>
                setNumberAdmin(parseInt(e.target.value, 10) || 0)
              }
              id="admin"
              placeholder="Hodimlar soni"
            />
            <br />
            <label htmlFor="desc">Izoh *</label>
            <br />
            <textarea
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Kompaniya haqida izoh qoldiring"
            ></textarea>
            <div className="button">
              <button className="btnExit">ORTGA</button>
              <button className="btnSave" onClick={handleSave}>
                Keyingisi
              </button>
            </div>
          </div>
          <div className="card">
            {data.length > 0 &&
              data.map((users, index) => {
                return (
                  <div key={index} className="info">
                    <h3>Kampaniyangiz nomi:{users.companyName}</h3>
                    <ul>
                      <li>Emailingiz:{users.email}</li>
                      <li>Tel:{users.telNum}</li>
                      <li>Davlat:{users.nationaly}</li>
                      <li>Shahar:{users.nationalySity}</li>
                      <li>Manzilingiz:{users.place}</li>
                      <li>Hodimlar:{users.numberAdmin}</li>
                      <li>Xulosa:{users.desc}</li>
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Card;
