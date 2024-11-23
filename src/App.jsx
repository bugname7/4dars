import React from "react";
import "./assets/font.css";
import facebook from "./assets//images/facebook.svg";
import linked from "./assets//images/linked.svg";
import instagram from "./assets//images/instagram.svg";
import telegram from "./assets//images/telegram.svg";
import logo from "./assets//images/logo.svg";
import elipse from "./assets//images/elipse.png";
import github from "./assets//images/github.svg";
import Card from "./assets/components/Card";
import Header from "./assets/components/Header"; // To'g'ri yo'lni tekshiring

function App() {
  return (
    <div>
      <Header logo={logo} />
      <Card
        linked={linked}
        elipse={elipse}
        telegram={telegram}
        facebook={facebook}
        github={github}
        instagram={instagram}
      />
    </div>
  );
}

export default App;
