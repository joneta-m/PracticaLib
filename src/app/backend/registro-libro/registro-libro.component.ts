import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Libro } from 'src/app/models/model.interface';

@Component({
  selector: 'app-registro-libro',
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.scss'],
})
export class RegistroLibroComponent implements OnInit {
  newLibro : Libro;
  private path = 'Libro/';
  enableNewLibro = false;

  signat : string;
  titulo :string;
  tema: string;
  autor : number;
  editorial : string;
  year : string;
  id :string;

  constructor(public service : FirestoreService) { }

  ngOnInit() {
    this.getLibros();
  }
   

  guardarLibro(){
    const data = {
      st : this.signat,
      titulo : this.titulo,
      tema : this.tema,
      autor : this.autor,
      editorial : this.editorial,
      year : this.year,
      id : this.service.getId()
    };

    this.service.createLibro(data, this.path, this.id);
  }

  libros : Libro[] = [];
  getLibros(){
    this.service.getCollectionL<Libro>(this.path).subscribe ( res => {
        this.libros = res;
    });
  }
  nuevoLibro(){
    this.enableNewLibro = true;
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


}
