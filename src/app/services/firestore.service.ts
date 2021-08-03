import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public database : AngularFirestore) { }

  createLibro(data : any, path : string, id : string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
  }
  getLibro(path : string, id: string){
    const collection = this.database.collection(path);
    return collection.doc(id).valueChanges();  
  }

  deleteLibro(path : string, id : string)
  {
    const collection = this.database.collection(path);
    return collection.doc(id).delete();
  }  

  updateLibro(data : any, path : string, id : string){
    const collection = this.database.collection(path);
    return collection.doc(id).update(data);
  }

  getId(){
    return this.database.createId();
  }

  getCollectionL<tipo>(path : string){
    const collection = this.database.collection<tipo>(path);
    return collection.valueChanges();
  }
  
  //

  createPrestamo(data : any, path : string, id : string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
  }
  getPrestamo(path : string, id: string){
    const collection = this.database.collection(path);
    return collection.doc(id).valueChanges();  
  }

  deletePrestamo(path : string, id : string)
  {
    const collection = this.database.collection(path);
    return collection.doc(id).delete();
  }  
  updatePrestamo(data : any, path : string, id : string){
    const collection = this.database.collection(path);
    return collection.doc(id).update(data);
  }
  getIdP(){
    return this.database.createId();
  }
  getCollectionP<tipo>(path : string){
    const collection = this.database.collection<tipo>(path);
    return collection.valueChanges();
  }

  //
  createAdmin(data : any, path : string, id : string){
    const collection = this.database.collection(path);
    return collection.doc(id).set(data);
  }
  getAdmin(path : string, id: string){
    const collection = this.database.collection(path);
    return collection.doc(id).valueChanges();  
  }
  getIdA(){
    return this.database.createId();
  }
  getCollectionA<tipo>(path : string){
    const collection = this.database.collection<tipo>(path);
    return collection.valueChanges();
  }
}
