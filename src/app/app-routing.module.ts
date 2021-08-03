import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './backend/admin/admin.component';
import { RegistroAdminComponent } from './backend/registro-admin/registro-admin.component';
import { LoginComponent } from './backend/login/login.component';
import { RegistroLibroComponent } from './backend/registro-libro/registro-libro.component';
import { ConsultaLibroComponent } from './backend/consulta-libro/consulta-libro.component';
import { ConsultaLibrosComponent } from './backend/consulta-libros/consulta-libros.component';
import { RegistroPrestamoComponent } from './backend/registro-prestamo/registro-prestamo.component';
import { ConsultaPrestamoComponent } from './backend/consulta-prestamo/consulta-prestamo.component';
import { ConsultaPrestamosComponent } from './backend/consulta-prestamos/consulta-prestamos.component';


const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'admin',
    component : AdminComponent
  },
  {
    path : 'create_admin',
    component : RegistroAdminComponent
  },
  {
    path : 'nuevo_libro',
    component : RegistroLibroComponent
  },
  {
     path : 'info_libro',
     component : ConsultaLibroComponent
  },
  {
    path : 'info_libros',
    component : ConsultaLibrosComponent
  },
  {
    path : "nuevo_prestamo",
    component : RegistroPrestamoComponent
  },
  {
    path : 'info_prestamo',
    component : ConsultaPrestamoComponent
  },
  {
    path : 'info_prestamos',
    component : ConsultaPrestamosComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
