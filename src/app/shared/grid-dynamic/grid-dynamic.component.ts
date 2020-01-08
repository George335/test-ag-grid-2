import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-grid-dynamic',
  templateUrl: './grid-dynamic.component.html',
  styleUrls: ['./grid-dynamic.component.css']
})
export class GridDynamicComponent implements OnInit {

  @ViewChild('agGrid',null) agGrid: AgGridAngular;

  @Input() objFilas: any;
  @Input() objColumnas: any;

  title = 'app';

  //DATOS - 1
  // columnDefs = [
  //   { headerName: 'Make', field: 'id', sortable: true, filter: true, checkboxSelection: true  },
  //   { headerName: 'Model', field: 'name', sortable: true, filter: true }
  // ];

  //DATOS - 1
  //rowData: any;

  //VEHICULOS
  // vehiculos: any;
  // columnaVehiculos = [
  //   { headerName: 'Marca', field: 'marca', sortable: true, filter: true, checkboxSelection: true  },
  //   { headerName: 'Modelo', field: 'modelo', sortable: true, filter: true }
  // ];

  //LENGUAJES DE PROGRAMACIÓN
  // cursos: any;
  // columnaCursos = [
  //   { headerName: 'LENGUAJE', field: 'lenguaje', sortable: true, filter: true, checkboxSelection: true  },
  //   { headerName: 'Framework', field: 'framework', sortable: true, filter: true }
  // ];

  constructor(private http: HttpClient) {
    // console.log(this.objFilas);
    // console.log(this.objColumnas);
  }

  ngOnInit() {

    console.log(this.objFilas);
    console.log(this.objColumnas);

    // this.vehiculos = [
    //   { "marca": 'Toyota', "modelo": "Yaris" },
    //   { "marca": 'Kia', "modelo": "Sportage" },
    //   { "marca": 'Hyundai', "modelo": "Santa Fe" }
    // ];

    // this.cursos = [
    //   { "lenguaje": 'JAVA', "framework": "Spring Boot" },
    //   { "lenguaje": 'C#', "framework": "Entity Framework" }
    // ];

    //this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    
    //DATOS - 1
    //this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');

  }

  //MUESTRA EL NOMBRE DE LA COLUMNA
  // getSelectedRows() {
  //   const selectedNodes = this.agGrid.api.getSelectedNodes();
  //   const selectedData = selectedNodes.map( node => node.data );
  //   const selectedDataStringPresentation = selectedData.map( node => node.marca + ' ' + node.modelo).join(', ');
  //   alert(`Selected nodes: ${selectedDataStringPresentation}`);
  // }

}
