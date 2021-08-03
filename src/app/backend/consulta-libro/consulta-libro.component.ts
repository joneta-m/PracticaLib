import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service'; 
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/model.interface';

@Component({
  selector: 'app-consulta-libro',
  templateUrl: './consulta-libro.component.html',
  styleUrls: ['./consulta-libro.component.scss'],
})
export class ConsultaLibroComponent implements OnInit {

  constructor(public service : FirestoreService, public router : Router) { }

  ngOnInit(){
    
  }
  newLibro : Libro;
  private path = 'Libro/';

  nuevoLibro(){
   
    this.newLibro = {
      signatTop : '',
      titulo : '',
      tema : '',
      autor : '',
      editorial : '',
      year : '',
      id : ''
    }
  }

  deleteLibro(libro : Libro){
    this.service.deletePrestamo(this.path, libro.id);
  }

}
