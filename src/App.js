
import './App.css';
// import myImage from './img1.png';
import myImage3 from './img3.png';

function App() {

  // my instagram profile
  function openInstagram() {
    window.open("https://instagram.com/xctom?igshid=YmMyMTA2M2Y=");
  }

  // my fis profile
  function openFIS() {
    window.open("https://www.fis-ski.com/DB/general/athlete-biography.html?sectorcode=CC&competitorid=226849");
  }

  // my facebook
  function openFacebook() {
    window.open("https://www.facebook.com/tom.stephen.545402?mibextid=LQQJ4d");
  }

  // fischer website
  function openFischer() {
    window.open("https://www.fischersports.com/us_en/");
  }

  // swix website
  function openSwix() {
    window.open("https://www.swixsport.ca/");
  }

  // dissent website
  function openDissent() {
    window.open("https://www.dissentlabs.com/");
  }

  // nordiq canada profile
  function openNCProfile() {
    window.open("https://nordiqcanada.ca/athlete/tom-stephen/");
  }

  const darkModeBtm = () => {
    document.body.classList.toggle("dark-mode");
  }

  const dropDown = () => {
    const dropdown = document.querySelector(".dropdown");
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
       dropdown.style.display = "none";
    }
  }

  return (
    <>
    <div id="top">
      <button id="dark-mode" onClick={darkModeBtm}>&#9681;</button>
    </div>

    <div id="content">
      <img src={myImage3} id="portrit" alt="Error"/>
      <h1 id="title">Tom Stephen</h1>
      <div id="desc-box">
        <p id="description">Cross country skiier on the Canadian national team. I train and live in Canmore Alberta and go to school in at the University of Calgary.</p>
      </div>
      <div id="links">
        <button id="instagram-profile-link" onClick={openInstagram}>Instagram</button>
        <button id="fis-profile-link" onClick={openFIS}>FIS Profile</button>
        <button id="facebook-prifile-link" onClick={openFacebook}>Facebook</button>
        <button id="nc-profile" onClick={openNCProfile}>Nordiq Canada Profile</button>
        <button id="sponsors" onClick={dropDown}>Sponsors</button>
          <div className="dropdown">
            <button id="fischer" className="sp-but" onClick={openFischer}>Fischer</button>
            <button id="swix" className="sp-but"  onClick={openSwix}>Swix</button>
            <button id="dissent" className="sp-but"  onClick={openDissent}>Dissent</button>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
