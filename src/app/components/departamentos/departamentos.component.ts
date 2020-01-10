import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { Departamento } from 'src/app/model/departamento.model';
import { ColumnaDepartamento } from 'src/app/model/columnadepartamento.model';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  @ViewChild('agGrid',null) agGrid: AgGridAngular;

  title = 'app';

  listaDepartamentos: Departamento[] = [];
  columnaListaDepartamentos: ColumnaDepartamento[] = [];

  //DEPARTAMENTOS
  // departamentos: any;
  // columnaDepartamentos: any;

  constructor(
    private http: HttpClient, 
    private departamentoService: DepartamentoService) {

  }

  ngOnInit() {

    //Inicializo la obtención de datos de departamentos.
    this.departamentoService.getDepartamentos()
      .subscribe( resp => {
        this.listaDepartamentos = resp;
      });

      //Inicializo la obtención de datos de columna departamento.
    this.departamentoService.getColumnaDepartamentos()
    .subscribe( resp => {
      this.columnaListaDepartamentos = resp;
    });


    // this.departamentos = [    
    //   { "id":'1', "nombre": 'Lima' },  
    //   { "id":'2', "nombre": 'Huánuco' }
    // ];

    // this.columnaDepartamentos = [
    //   { headerName: '# ID', field: 'id', sortable: true, filter: true, checkboxSelection: true  },
    //   { headerName: 'Departamento', field: 'nombre', sortable: true, filter: true, checkboxSelection: false }
    // ];


  }

  //MUESTRA EL NOMBRE DE LA COLUMNA
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.lenguaje + ' ' + node.framework).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}

