import { Table, Input, Button, Space, Tooltip, Popconfirm } from 'antd';
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

function ListeTaches(){
  const columns = [
    {
      title: 'Site',
      dataIndex: 'site',
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
      title: 'Lieu',
      dataIndex: 'Lieu',
      sorter: (a, b) => a.lieu - b.lieu,
    },
    {
      title: 'Date d\'ajout',
      dataIndex: 'Date d\'ajout',
      sorter: (a, b) => a.date - b.date,

    },
    {
      title: 'Opérateurs',
      dataIndex: 'Opérateurs',
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
      title:"Mission",
      dataIndex:"mission",
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
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  function updateDelete(record){

    return(<Space size="middle">
        <Tooltip title="Visualiser">
        <button 
          className={StylesListe.actionButton}
          // onClick={() => goUpload(record)}
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
        <Tooltip title="Visualiser">
          <Button type="primary" 
          // onClick={() => showPlace(record)}
          icon={<EyeOutlined />}/>
        </Tooltip>
        <Tooltip title="Supprimer">
          <Popconfirm
            title="Voulez-vous vraiment supprimer cette tâche?"
            // onConfirm={() => confirm(record.id_lieu)}
            okText="Oui"
            cancelText="Non">
              <Button type="danger" 
                icon={<DeleteOutlined/>}/>
          </Popconfirm>
        </Tooltip>
    </Space>)
    }
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }
    return(<div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>)
}

export default ListeTaches;
