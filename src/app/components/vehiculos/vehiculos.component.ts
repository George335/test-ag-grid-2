import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  @ViewChild('agGrid',null) agGrid: AgGridAngular;

  title = 'app';

  //DATOS - 1
  // columnDefs = [
  //   { headerName: 'Make', field: 'id', sortable: true, filter: true, checkboxSelection: true  },
  //   { headerName: 'Model', field: 'name', sortable: true, filter: true }
  // ];

  //DATOS - 1
  //rowData: any;

  //VEHICULOS
  vehiculos: any;
  columnaVehiculos: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {


    this.vehiculos = [
      { "marca": 'Toyota', "modelo": "Yaris" },
      { "marca": 'Kia', "modelo": "Sportage" },
      { "marca": 'Hyundai', "modelo": "Santa Fe" }
    ];

    this.columnaVehiculos = [
      { headerName: 'Marca', field: 'marca', sortable: true, filter: true, checkboxSelection: true  },
      { headerName: 'Modelo', field: 'modelo', sortable: true, filter: true }
    ];


    //this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    
    //DATOS - 1
    //this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');

  }

  //MUESTRA EL NOMBRE DE LA COLUMNA
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.marca + ' ' + node.modelo).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}


