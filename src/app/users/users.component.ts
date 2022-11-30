
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {UsersModel1, UsersModel2} from '../models/UsersModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersDB: UsersModel1[] = [];
  users: UsersModel2[] = [];
  ages: number[] = [];

  columns = ["Nombre", "Email", "Dirección", "Teléfono", "Fecha de Cumpleaños", "Edad", "Modificar", "Eliminar"];

  index = ["name", "email", "address", "phone", "birthDate", "age"];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      response => {
        this.usersDB = (JSON.parse(JSON.stringify(response)))[0];
        this.ages = this.usersService.getAges(this.usersDB);
        console.log(this.ages);
        for(let i=0; i<this.usersDB.length; i++) {
          this.users.push({
            id: this.usersDB[i].id, 
            name: this.usersDB[i].name,
            email: this.usersDB[i].email,
            address: this.usersDB[i].address,
            phone: this.usersDB[i].phone,
            birthday: this.usersDB[i].birthday,
            age: this.ages[i]
          })
        }
        console.log(this.users);
      },
      err => console.log(err)
    )
  }
   
  deleteUser(user: UsersModel1): void {
    this.users = this.users.filter(h => h !== user);
    this.usersService.deleteUser(user)
    .subscribe(response => {
      console.log(response);
      if(response == 1){
        
      }
    }) 
  }
}