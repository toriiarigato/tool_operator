import {Tooltip } from "antd";
import worker from '../assets/worker.png';
import map from '../assets/map.png';
import calendar from '../assets/calendar.png';
import note from '../assets/note.png';
import stylesMenu from './MainMenu.module.css';
import "antd/dist/antd.css";

function MainMenu(){
  return (
    <div className={stylesMenu.menuBlock}>
      <div className={stylesMenu.menuItem}>
        <Tooltip title="opérateur" placement="topLeft">
          <img src={worker.src} alt="worker."className={stylesMenu.menuItemLogo}/>
        </Tooltip>
        <br></br>
        <h5>Gestion des opérateurs</h5>
      </div>
      <div className={stylesMenu.menuItem}>
        <Tooltip title="sites" mouseLeaveDelay={0}>
          <img src={map.src} alt="map."className={stylesMenu.menuItemLogo}/>
        </Tooltip>
        <br></br>
        <h5>Gestion des sites</h5>
      </div>
      <div className={stylesMenu.menuItem}>
        <Tooltip title="calendrier" mouseLeaveDelay={0}>
          <img src={calendar.src} alt="calendar."className={stylesMenu.menuItemLogo}/>
        </Tooltip>
        <br></br>
        <h5>Calendrier</h5>
      </div>
      <div className={stylesMenu.menuItem}>
        <Tooltip title="tâches" mouseLeaveDelay={0}>
          <img src={note.src} alt="note."className={stylesMenu.menuItemLogo}/>
        </Tooltip>
        <br></br>
        <h5>Gestions des tâches</h5>
      </div>

    </div>
  )
}

export default MainMenu;