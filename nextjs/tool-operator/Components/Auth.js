import { Input, Button, Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useRouter } from 'next/router';
import pocketknife from '../assets/pocket-knife.png';
import maintenance from '../assets/maintenance.png';
import garden from '../assets/garden.png';
import mechanic from '../assets/mechanic.png';
import paintroller from '../assets/paint-roller.png';

import {useState} from 'react';
import styles from './Auth.module.css'

function Auth(){
  const router = useRouter();
  const [identifiant, setIdentifiant] = useState(null);
  const [passWord, setPassword] = useState(null);

  function connect(){
    router.push('/accueil');
  }
    return(<div className={styles.auth}>
      <div className={styles.head}>
            <img src={maintenance.src} alt="maintenance." className={styles.logos}/>
            <img src={garden.src} alt="garder." className={styles.logos}/>
      </div>
      <div className={styles.authcontainer}>
        <div className={styles.connectheader}>
          <img src={pocketknife.src} alt="pocketknife." className={styles.logosknife}/>
        </div>
        <div className={styles.title}>
        <h1>TOOL OPERATOR</h1>
        </div>
          <div className={styles.connect}>
            <Form 
              name="connexion"
              labelCol={{span:8}}
              wrapperCol={{span:16}}>
              <Form.Item
              label="Identifiant Opérateur"
              name="identifiant"
              rules={[{ required: true, message: 'Veuillez entrer votre identifiant' }]}>
                <input type="text" placeholder="Entrer votre identifiant"
                  onChange={(e) => {setIdentifiant(e.target.value)}}
                  required={true}
                />
              </Form.Item>
              <br></br>
              <Form.Item
                label="Mot de Passe"
                name="password"
                rules={[{ required: true, message: 'Veuillez entrer votre mot de passe' }]}
                >
                <Input.Password
                placeholder="Mot de passe"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
              />
              </Form.Item>
              <a href="prout">Mot de passe oublié?</a>
              <br></br>
              <br></br>
              <Form.Item>
                <Button
                onClick={(e) => {
                  connect(e.preventDefault())
                }}>
                CONNEXION
              </Button>
              </Form.Item>
            </Form>
              </div>
      </div>
      <div className={styles.foot}>
            <img src={mechanic.src} alt="mechanic." className={styles.logos}/>
            <img src={paintroller.src} alt="paintroller." className={styles.logos}/>
      </div>
      </div>
      )
}
export default Auth;