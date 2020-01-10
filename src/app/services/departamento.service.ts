import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Departamento } from '../model/departamento.model';
import { ColumnaDepartamento } from '../model/columnadepartamento.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private url = 'http://localhost:54922/api';

  constructor( private http: HttpClient) {


  }



  getDepartamentos() {
    return this.http.get(`${ this.url }/departamento`)
            .pipe(
              map( this.crearArreglo ),
              delay(1500)
            );
  }

  private crearArreglo( departamentoObj: object ) {

    const departamentos: Departamento[] = [];

    //Hago un recorrido de obj y le asigno un "key"
    Object.keys( departamentoObj ).forEach( key => {

      //Extraigo el objeto y lo asigno a una referencia
      const departamento: Departamento = departamentoObj[key];

      //departamento.id = key;

      //Almaceno los héroes en el arreglo
      departamentos.push( departamento );

    });

    //Si no hay información en la base de datos
    if ( departamentoObj === null ) { return []; }

    return departamentos;
  }

  getColumnaDepartamentos() {
    return this.http.get(`${ this.url }/values`)
            .pipe(
              map( this.crearArregloColumna ),
              delay(1500)
            );
  }

  private crearArregloColumna( columnaDepartamento: object ) {

    const columnadepartamentos: ColumnaDepartamento[] = [];

    //Hago un recorrido de obj y le asigno un "key"
    Object.keys( columnaDepartamento ).forEach( key => {

      //Extraigo el objeto y lo asigno a una referencia
      const columnadepartamento: ColumnaDepartamento = columnaDepartamento[key];

      //departamento.id = key;

      //Almaceno los héroes en el arreglo
      columnadepartamentos.push( columnadepartamento );

    });

    //Si no hay información en la base de datos
    if ( columnaDepartamento === null ) { return []; }

    return columnadepartamentos;
  }

}
