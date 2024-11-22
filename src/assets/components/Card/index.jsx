import "./index.css";

function Card() {
  return (
    <div>
      <main>
        <div className="container">
          <div className="main">
            <h2>Kompaniya ma’lumotlari</h2>
            <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
            <div className="logo">
              <img src="" alt="image" />
              <a href="#">Yuklash</a>
            </div>
            <label htmlFor="name">Kompaniya nomi *</label>
            <br />
            <input type="text" id="name" placeholder="Kompaniya nomi" />
            <br />
            <label htmlFor="email">Email *</label>
            <br />
            <input type="email" id="email" placeholder="Email" />
            <br />
            <label htmlFor="number">Telefon raqami * </label>
            <br />
            <input type="number" id="number" placeholder="UZ +9989" />
            <br />
            <label htmlFor="link">Linklar * </label>
            <br />
            <div className="img">
              <img src={facebook} alt="linked image" />
              <img src={instagram} alt="instagram image" />
              <img src={github} alt="telegram image" />
              <img src={telegram} alt="facebook image" />
              <img src={linked} alt="github image" />
            </div>
            <br />
            <div className="country">
              <div className="from">
                <label for="country">Davlatni tanlang:</label>
                <br />
                <select id="country" name="country">
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
                <label for="city">Shaharni tanlang:</label>
                <br />
                <select id="city" name="city">
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
            <input type="text" id="place" placeholder="Joy" />
            <br />
            <label htmlFor="admin">Hodimlar soni *</label>
            <br />
            <input type="number" id="admin" placeholder="Joy" />
            <div className="button">
              <button className="btnExit">ORTGA</button>
              <button className="btnSave">Keyingisi</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Card;
