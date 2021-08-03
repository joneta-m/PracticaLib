import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss'],
})
export class RegistroAdminComponent implements OnInit {
  
  usuario : string;
  nombre : string;
  apellidoP :string;
  apellidoM : string;
  id :string;

  private path = '/admin';
  
  constructor(public service : FirestoreService) { }

  ngOnInit() {}

  guardarAdmin(){
    const data = {
      usuario : this.usuario,
      nombre : this.nombre,
      apellidoP : this.apellidoP,
      apellidoM : this.apellidoM,
      id : this.service.getIdA()
    }
    this.service.createAdmin(data, this.path, this.id);
  }

}
