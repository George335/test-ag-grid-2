import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css']
})
export class LenguajesComponent implements OnInit {

  @ViewChild('agGrid',null) agGrid: AgGridAngular;

  title = 'app';

  //DATOS - 1
  // columnDefs = [
  //   { headerName: 'Make', field: 'id', sortable: true, filter: true, checkboxSelection: true  },
  //   { headerName: 'Model', field: 'name', sortable: true, filter: true }
  // ];

  //DATOS - 1
  //rowData: any;

  //LENGUAJES DE PROGRAMACIÓN
  cursos: any;
  columnaCursos: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {


    this.cursos = [    
      { "id":'1', "lenguaje": 'JAVA', "framework": "Spring Boot" },  
      { "id":'2', "lenguaje": 'C#', "framework": "Entity Framework" }
    ];

    this.columnaCursos = [
      {
        headerName: 'ID', field: 'id', sortable: true, filter: true, width: 35,
    },
      {
          headerName: 'Skills',
          children: [
            { headerName: 'LENGUAJE', field: 'lenguaje', sortable: true, filter: true, checkboxSelection: true  },
            { headerName: 'Framework', field: 'framework', sortable: true, filter: true }
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

