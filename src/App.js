
import './App.css';
import myImage from './img1.png';
import myImage3 from './img3.png';

function App() {

  // make sure the page is loaded first
  function openInstagram() {
    window.open("https://instagram.com/xctom?igshid=YmMyMTA2M2Y=");
  }

  function openFIS() {
    window.open("https://www.fis-ski.com/DB/general/athlete-biography.html?sectorcode=CC&competitorid=226849");
  }

  function openFacebook() {
    window.open("https://www.facebook.com/tom.stephen.545402?mibextid=LQQJ4d");
  }

  window.onload = function() {
  const darkmodeBtn = document.getElementById("dark-mode");
  darkmodeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
  }

  return (
    <>
    <div id="top">
      <button id="dark-mode">&#9681;</button>
    </div>

    <div id="content">
      <img src={myImage3} id="portrit" alt="Error"/>
      <h1 id="title">Tom Stephen</h1>
      <p id="description">I am a cross country skiier on the Canadien national team. I train and live in Canmore Alberta.</p>
      <div id="links">
        <button id="instagram-profile-link" onClick={openInstagram}>My Instagram</button>
        <button id="fis-profile-link" onClick={openFIS}>My FIS Profile</button>
        <button id="facebook-prifile-link" onClick={openFacebook}>Facebook</button>
      </div>
    </div>
    </>
  );
}

export default App;
