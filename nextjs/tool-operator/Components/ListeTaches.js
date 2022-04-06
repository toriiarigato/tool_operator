import React, {useState, useEffect} from 'react';
import { Table, Input, Button, Space, Tooltip, Popconfirm, Drawer } from 'antd';
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  EyeOutlined,
  CopyOutlined
} from '@ant-design/icons';
import StylesListe from './ListeTache.module.css';
import vision from '../assets/vision.png';
import pencil from '../assets/pencil.png';
import cancel from '../assets/cancel.png';
import accept from '../assets/accept.png';


function ListeTaches(){
  const [visible, setVisible] = useState(false);
  const [tache, setTache] = useState({});

  const columns = [
    {
      title: 'Sites',
      dataIndex: 'sites',
      filters: [
        {
          text: 'Site 1',
          value: 'Site 1',
        },
        {
          text: 'Site 2',
          value: 'Site 2',
        },
        {
          text: 'Site 3',
          value: 'Site 3',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: '30%',
    },
    {
      title: 'Lieux',
      dataIndex: 'lieux',
      sorter: (a, b) => a.lieux - b.lieux,
    },
    {
      title: 'Date d\'ajout',
      dataIndex: 'date_ajout',
      sorter: (a, b) => a.date_ajout - b.date_ajout,

    },
    {
      title: 'Opérateurs',
      dataIndex: 'operateurs',
      filters: [
        {
          text: 'Opérateurs 1',
          value: 'Opérateurs 1',
        },
        {
          text: 'Opérateurs 2',
          value: 'Opérateurs 2',
        },
        {
          text: 'Opérateurs 3',
          value: 'Opérateurs 3',
        },
      ],
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value),
      width: '30%',
    },
    {
      title:"Missions",
      dataIndex:"missions",
      sorter: (a, b) => a.mission - b.mission,
      filterDropdown:({setSelectedKeys, selectedKeys,confirm,clearFilters}) => {
        return (<div>
          <Input
            autofocus
            placeholder="Tapez votre recherche"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [])
              confirm({closeDropdown: false});
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
                confirm();
            }}/>
          <Button
            onClick={()=>{
                confirm()
            }}
            type={"primary"}>
            Search
          </Button>
          <Button
            onClick={()=>{
                clearFilters()
            }}
            type={"warning"}>
            Reset
          </Button>
        </div>)
      },
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      // onFilter:(value,record) => {
      //     return record.mission.toLowerCase().includes(value.toLowerCase())
      // },
    },
    {
      title: 'Tâches',
      dataIndex: 'taches',
      sorter: (a, b) => a.taches - b.taches,
      filterDropdown:({setSelectedKeys, selectedKeys,confirm,clearFilters}) => {
        return (<div>
          <Input
            autofocus
            placeholder="Tapez votre recherche"
            value={selectedKeys[0]}
            onChange={(e) => {
              setSelectedKeys(e.target.value ? [e.target.value] : [])
              confirm({closeDropdown: false});
            }}
            onPressEnter={() => {
              confirm();
            }}
            onBlur={() => {
                confirm();
            }}/>
          <Button
            onClick={()=>{
                confirm()
            }}
            type={"primary"}>
            Search
          </Button>
          <Button
            onClick={()=>{
                clearFilters()
            }}
            type={"warning"}>
            Reset
          </Button>
        </div>)
      },
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      // onFilter:(value,record) => {
      //     return record.taches.toLowerCase().includes(value.toLowerCase())
      // },
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text, record) => (updateDelete(record))
    },
  ];
  
  const data = [
    {
      key: '1',
      sites: 'Les Servelières',
      lieux: 'Prairie',
      operateurs: 'Marc',
      date_ajout: '23/05/2020',
      missions: 'Jardin',
      taches: 'Tondre la pelouse'
    },
    {
      key: '2',
      sites: 'Les Servelières',
      lieux: 'Prairie',
      operateurs: 'Marc',
      date_ajout: '23/05/2020',
      missions: 'Jardin',
      taches: 'Tondre la pelouse'
    },
    {
      key: '3',
      sites: 'Les Servelières',
      lieux: 'Jardin',
      operateurs: 'Marc',
      date_ajout: '23/05/2020',
      missions: 'Jardin',
      taches: 'Tondre la pelouse'
    },
    {
      key: '4',
      sites: 'Les Servelières',
      lieux: 'Prairie',
      operateurs: 'Marc',
      date_ajout: '23/05/2020',
      missions: 'Jardin',
      taches: 'Tondre la pelouse'
    },
    
  ];

  const showDrawer = (record) => {
    console.log(record)
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  function updateDelete(record){

    return(
    <Space size="middle">
        <Tooltip title="Visualiser">
        <button 
          className={StylesListe.actionButton}
          onClick={(record) => showDrawer(record)}
          >
            <img src={vision.src} className={StylesListe.actionLogo}></img>
        </button>
        </Tooltip>
        <Tooltip title="Modifier">
        <button 
          className={StylesListe.actionButton}
          // onClick={() => goUpload(record)}
          >
            <img src={pencil.src} className={StylesListe.actionLogo}></img>
        </button>
        </Tooltip>
        <Tooltip title="Signaler comme terminée">
        <Popconfirm
            title="Voulez-vous confirmer que cette tâche est terminée"
            // onConfirm={() => confirm(record.id_lieu)}
            okText="Oui"
            cancelText="Non">
          <button 
            className={StylesListe.actionButton}
            // onClick={() => goUpload(record)}
            >
              <img src={accept.src} className={StylesListe.actionLogo}></img>
          </button>
        </Popconfirm>
        </Tooltip>
        <Tooltip title="Supprimer">
          <Popconfirm
            title="Voulez-vous vraiment annuler cette tâche?"
            // onConfirm={() => confirm(record.id_lieu)}
            okText="Oui"
            cancelText="Non">
            <button 
              className={StylesListe.actionButton}
              // onClick={() => goUpload(record)}
              >
                <img src={cancel.src} className={StylesListe.actionLogo}></img>
            </button>
          </Popconfirm>
        </Tooltip>
    </Space>)
    }
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
    return(<div>
      <h3>Dernières tâches en cours : </h3>
      <Table columns={columns} dataSource={data} onChange={onChange} />
      <Drawer placement="right" onClose={() => {setVisible(false)}} visible={visible} width={500} >
        <h2>Détails de la tâche :</h2>
        <h3>Site :</h3>
        <p>{tache.site}</p>
        <br></br>
        <h3>Lieu : </h3>
        <p>{tache.lieu}</p>
        <br></br>
        <h3>Date d'ajout : </h3>
        <p>{tache.date}</p>
        <br></br>
        <h3>Opérateur en charge : </h3>
        <p>{tache.operateur}</p>
        <br></br>
        <h3>Mission : </h3>
        <p>{tache.mission}</p>
        <br></br>
        <h3>Tâche : </h3>
        <p>{tache.tache}</p>
        <br></br>
        <h3>Commentaire : </h3>
        <p>{tache.commentaire}</p>
        <br></br>
        <h3>Avancement : </h3>
        <p>{tache.avancement}</p>
        <br></br>
        <h3>Photos : </h3>
        <p>{tache.photos}</p>
        <br></br>
      </Drawer>
    </div>)
}

export default ListeTaches;
