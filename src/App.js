import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header.js"
import Artist from "./Components/Artist.js"

class App extends Component {
  render() {
    return <div> <Header header="Jaela Camille Wesley 🐙" />
    <Artist artistName ="Beyoncé" artistImage="https://media1.popsugar-assets.com/files/thumbor/v8DvvjT1yioUp0aVa3-182J52qk/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/02/17/796/n/1922564/237f04630bc507ca_VAPl3ZulyEBE_1280x1280_KaMXZQjO/i/Beyoncé-Wears-Red-Dress-Valentine-Day-2019.jpg" artistSong="There is too many to even name. I mean c'mon - it's BEYONCÉ 👑🐝" />
    </div>
  }
}

export default App;
