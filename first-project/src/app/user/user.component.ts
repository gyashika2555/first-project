import { Component , EventEmitter, Input , Output, output } from '@angular/core';
// import { Component , computed , signal} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users' 
import { type User } from './user.model'
// import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
@Component({
  selector: 'app-user',
   standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  // imports:[CardComponent]
})

export class UserComponent {
  // @Input({required :true}) id!:string;
  // @Input({required :true}) avatar!:string;
  // @Input({required :true}) name!:string;
   @Input ({required:true}) user!:User;
   @Input ({required:true}) selected!:boolean;
   @Output() select = new EventEmitter();

selectedUser=DUMMY_USERS[randomIndex];
  // select =output<string>(); 


  get imagePath(){
  return 'assets/Users/'+ this.user.avatar;
  }

  onSelectedUser(){
   this.select.emit(this.user.id);
  }

//  SelectedUser=DUMMY_USERS[randomIndex];

  //  SelectedUser= signal(DUMMY_USERS[randomIndex]);
  //  imagePath=computed(() => 'assets/Users/'+ this.SelectedUser().avatar )
   

//  get imagePath(){
//   return 'assets/Users/'+ this.SelectedUser.avatar
//  }
//   onselectUser(){
//   console.log('clicked !');
//  }

//  onselectUser(){
//   const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
//   this.SelectedUser=DUMMY_USERS[randomIndex];
//  }

//  onselectUser(){
//   const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length)
//   this.SelectedUser.set(DUMMY_USERS[randomIndex]);
//  }
}
