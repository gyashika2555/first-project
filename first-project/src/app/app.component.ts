import { Component } from  '@angular/core';
import {HeaderComponent} from './header/header.component';
// import { UserComponent} from "./user/user.component" ;
import { DUMMY_USERS } from './dummy-users';
// import { TasksComponent} from "./tasks/tasks";
// import { NgFor , NgIf} from '@angular/common';

 @Component({
  selector:'app-root', 
   standalone:false,
  templateUrl:'./app.component.html' ,
  styleUrl: './app.component.css' ,
 })

export class AppComponent {
users=DUMMY_USERS;
selectedUserId ?:string;
// // selectedUserId ='u1';

 get selectedUser(){
  return this.users.find((user) => user.id === this.selectedUserId);
 }

onSelectedUser(id:string){
    console.log('selected User with Id :- '+ id);
    // console.log('selected User withname- '+ name);
    this.selectedUserId =id;
    }

// onselectUser(id:string){
// console.log('selected User with Id :- '+ id);
// }
}