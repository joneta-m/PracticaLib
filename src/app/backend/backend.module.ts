import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroLibroComponent } from './registro-libro/registro-libro.component';
import { RegistroPrestamoComponent } from './registro-prestamo/registro-prestamo.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { ConsultaLibroComponent } from './consulta-libro/consulta-libro.component';
import { ConsultaLibrosComponent } from './consulta-libros/consulta-libros.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ConsultaPrestamosComponent } from './consulta-prestamos/consulta-prestamos.component';
import { ConsultaPrestamoComponent } from './consulta-prestamo/consulta-prestamo.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RegistroLibroComponent,
    RegistroPrestamoComponent,
    RegistroAdminComponent,
    ConsultaLibroComponent,
    ConsultaLibrosComponent,
    LoginComponent,
    AdminComponent,
    ConsultaPrestamosComponent,
    ConsultaPrestamoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class BackendModule { }
