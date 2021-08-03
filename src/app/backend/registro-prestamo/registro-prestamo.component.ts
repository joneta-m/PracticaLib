import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Prestamo } from 'src/app/models/model2.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-prestamo',
  templateUrl: './registro-prestamo.component.html',
  styleUrls: ['./registro-prestamo.component.scss'],
})
export class RegistroPrestamoComponent implements OnInit {

  constructor(public service : FirestoreService, public router : Router) { }
  newPrestamo : Prestamo;
  enableNewPrestamo = false;
  private path = '/Prestamos';

  nombre : string;
  usuario :string;
  grupo: string;
  matricula : number;
  st : string;
  titulo : string;
  autor : string;
  id : string;

  ngOnInit() {
    this.getPrestamos();
  }

  guardarPrestamo(){
    const data = {
      nombreCompleto : this.nombre,
      tipoUsuario : this.usuario,
      grupo : this.grupo,
      matricula : this.matricula,
      signaturaTopologica : this.st,
      titulo : this.titulo,
      autor : this.autor,
      id : this.service.getIdP()
    }
    
    this.service.createPrestamo(data, this.path, this.id);
  }

  prestamos : Prestamo[] = [];
  getPrestamos(){
    this.service.getCollectionP<Prestamo>(this.path).subscribe(res => {
        this.prestamos = res;
    });
  }
  nuevoPrestamo(){
    this.enableNewPrestamo = true;
    this.newPrestamo = {
      nombre : '',
      usuario : '',
      grupo : '',
      matricula : null,
      st : '',
      titulo : '',
      autor : '',
      id : this.service.getIdP()
    }
  }

  deletePrestamo(prestamo : Prestamo){
    this.service.deletePrestamo(this.path, prestamo.id);
  }

}
