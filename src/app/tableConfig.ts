

export class TableConfig {

public static tableHeader = [{
    name:'Id',
    key: 'id',
    align: 'left',
    width:'100px',
    sort:true,
    color: '#ff00ff',
    type: 'string',

  },{
    name:'Name',
    key: 'name',
    align: 'center',
    width:'100px',
    sort:false,
    type: 'input'
  },{
    name:'Last',
    key: 'last',
    align: 'center',
    width:'100px',
    sort:true,
    type: 'input',
  },
  {
    name:'Address',
    key: 'address',
    align: 'center',
    width:'100px',
    sort:true,
    type: 'string',
  },
  {
    name:'Number',
    key: 'number',
    align: 'right',
    width:'100px',
    sort:true,
    type: 'string',
  },
  {
    name:'Country',
    key: 'country',
    align: 'right',
    width:'100px',
    sort:true,
    type: 'string',
  },
  {
    name:'',
    key: 'BTN',
    align: 'right',
    width:'100px',
    isEdit: false,
    isSave: true,
    isDelete: true,
    sort:false,
    type: 'BTN',
  }
];
}