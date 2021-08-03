import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/model3.interface';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {

  constructor(public service : FirestoreService) { }

  ngOnInit() {}

  usuario : string;
  nombre : string;
  apellidoP :string;
  apellidoM : string;
  id = this.service.getIdA();

  admins : Admin[] = [];
  private path = 'Admin/';

  getAdmin(){
    this.service.getCollectionA<Admin>(this.path).subscribe ( res => {
        this.admins = res;
    });
  }

}
