import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @ViewChild('agGrid',null) agGrid: AgGridAngular;

  title = 'app';

  //LENGUAJES DE PROGRAMACIÓN
  usuarios: any;
  columnaUsuarios: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {


    this.usuarios = [    
      { "id":'1', "name": 'Luis', "email": "luis@gmail.com" },  
      { "id":'2', "name": 'Fabiola', "email": "fabiola@gmail.com" }
    ];

    this.columnaUsuarios = [
      {
        headerName: 'ID', field: 'id', sortable: true, filter: true, width: 35,
    },
      {
          headerName: 'Datos personales',
          children: [
            { headerName: 'Nombre', field: 'name', sortable: true, filter: true, checkboxSelection: true  },
            { headerName: 'Email', field: 'email', sortable: true, filter: true }
          ]
      }
      
    ];


  }

  //MUESTRA EL NOMBRE DE LA COLUMNA
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.lenguaje + ' ' + node.framework).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}

