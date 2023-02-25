
import './App.css';
import myImage from './img1.png';

function App() {

  function openInstagram() {
    window.open("https://instagram.com/xctom?igshid=YmMyMTA2M2Y=");
  }

  function openFIS() {
    window.open("https://www.fis-ski.com/DB/general/athlete-biography.html?sectorcode=CC&competitorid=226849");
  }

  function openFacebook() {
    window.open("https://www.facebook.com/tom.stephen.545402?mibextid=LQQJ4d");
  }

  return (
    <div id="content">
      <img src={myImage} id="portrit" alt="My Image"/>
      <h1 id="title">Tom Stephen</h1>
      <p id="description">I am a web developer</p>
      <button id="instagram-profile-link" onClick={openInstagram}>My Instagram</button>
      <button id="fis-profile-link" onClick={openFIS}>My FIS Profile</button>
      <button id="facebook-prifile-link" onClick={openFacebook}>Facebook</button>
    </div>
  );
}

export default App;
