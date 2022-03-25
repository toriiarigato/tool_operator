import MainMenu from "../Components/MainMenu";
import { useRouter } from 'next/router';
import profile from '../assets/profile.png';
import ListeTaches from "../Components/ListeTaches";


function accueil(){
  const router = useRouter();

  function disconnect(){
    router.push('/')
  }

  return (<div className="pageContainer">
    <div className="profile">
      <div className="welcome">
        <p className="hello">Bonjour Marc!</p>
        <img src={profile.src} alt="profile." className="avatar"/>
      </div>
      <br></br>
      <button onClick={(e) => {
        disconnect(e.preventDefault())
      }}>Déconnexion
      </button>
    </div>

    <div className="menuContainer">
    <h2>Que voulez-vous faire aujourd'hui?</h2>
    <MainMenu/>
    </div>
    <div className="listeTaches">
      <ListeTaches/>
    </div>
  </div>)
}

export default accueil;