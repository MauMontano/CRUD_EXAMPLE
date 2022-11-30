import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import {UsersModel1} from '../models/UsersModel';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {firstValueFrom} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  public formGroup: FormGroup;
  public formControls: {
    name: FormControl,
    email: FormControl,
    address: FormControl,
    phone: FormControl,
    birthday: FormControl
  };

  public controlBounds: ControlConfig = {
    name: {
      minLength: 3,
      maxLength: 24
    },
    email: {
      maxLength: 24
    },
    phone: {
      regex: "^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$"
    }, 
    address: {
      minLength: 5,
      maxLength: 200
    },
    
  };

  public formDataStatus: FormDataStatus = FormDataStatus.IDLE;

  id: string | any;
  status: any;
  user: UsersModel1 = {id: 1, name:"", email:"", address:"", phone:"", birthday:""};
  birthday: any;
  
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private router: Router
  ) {
    this.formControls = {
      name: new FormControl(null, [
        Validators.minLength(this.controlBounds.name.minLength),
        Validators.maxLength(this.controlBounds.name.maxLength)
      ]),
      email: new FormControl(null, [
        Validators.email,
        Validators.maxLength(this.controlBounds.email.maxLength)
      ]),
      phone: new FormControl(null, [
        Validators.pattern(this.controlBounds.phone.regex)
      ]),
      address: new FormControl(null, [
        Validators.minLength(this.controlBounds.address.minLength),
        Validators.maxLength(this.controlBounds.address.maxLength)
      ]),
      birthday: new FormControl(null, [
        
      ]),
    };
    this.formGroup = new FormGroup(this.formControls);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("id");
    console.log(this.id);
    this.usersService.getUserById(this.id).subscribe(
      response => {
        this.user = response;
        let auxDate = new Date(this.user.birthday);
        let year = auxDate.getFullYear();
        let month;
        if((auxDate.getMonth() + 1) < 10){
          month = "0" + (auxDate.getMonth() + 1)
        }
        else{
          month = auxDate.getMonth();
        }
        let day
        if(auxDate.getDate() < 10){
          day = "0" + auxDate.getDate();
        }
        else{
          day = auxDate.getDate();
        }
        this.birthday = year + "-" + month + "-" + day;
        console.log("Birthday");
        console.log(this.birthday);
      },
      err => console.log(err)
    )
  }

  public getErrorMsg(control: FormControl, controlName: keyof ControlConfig): string {
    if (control.valid || control.pristine)
      return '';

    if (control.hasError('required'))
      return "Campo requerido";

    if (control.hasError('minlength'))
      return `La longitud mínima es de ${this.controlBounds[controlName].minLength}`;

    if (control.hasError('maxlength'))
      return `La longitud máxima es ${this.controlBounds[controlName].maxLength}`;

    if (control.hasError('email'))
      return "Ingresa un email correcto";
    
    if (control.hasError('pattern'))
      return "Type a número de teléfono valido";

    console.log("I made a mistake. Requested form control error message for", control, "and controlName", controlName);
    return "I made a mistake while programming. Please report. Details are in console";
  }

  /**
   * Function for updating user
   * @returns 
   */
  updateUser(): void {
    this.formDataStatus = FormDataStatus.SENDING;
    if (this.formGroup.invalid) {
      this.formControls.name.markAsDirty();
      this.formControls.email.markAsDirty();
      this.formControls.address.markAsDirty();
      this.formControls.phone.markAsDirty();
      this.formControls.birthday.markAsDirty();
      this.formDataStatus = FormDataStatus.IDLE;
      return;
    }

    let user : UsersModel1;
    let name, email, address, phone, birthday;

    //Validating name
    if(this.formControls.name.value != null){
      name = this.formControls.name.value;
    }
    else{
      name = this.user.name;
    }
    
    //Validating email
    if(this.formControls.email.value != null){
      email = this.formControls.email.value;
    }
    else{
      email = this.user.email;
    }

    //Validating address
    if(this.formControls.address.value != null){
      address = this.formControls.address.value;
    }
    else{
      address = this.user.address;
    }

    //Validating phone
    if(this.formControls.phone.value != null){
      phone = this.formControls.phone.value;
    }
    else{
      phone = this.user.phone;
    }

    //Validating birthday
    if(this.formControls.birthday.value != null){
      birthday = this.formControls.birthday.value;
    }
    else{
      birthday = this.birthday;
    }

    user = {
      id: this.user.id, 
      name:name,
      email:email,
      address:address,
      phone:phone,
      birthday:birthday 
    }

    console.log(user);
    this.usersService.updateUser(user)
      .subscribe(
        response => {
          this.status = response;
          console.log(response);
          if(response == 1){
            this.formDataStatus = FormDataStatus.SENT;
          }
          this.router.navigate(['/']);
      });
  }
}

type ControlConfig = {
  name?: any;
  email?: any;
  address: any;
  phone?: any;
  birthday?: any;
};

enum FormDataStatus {
  IDLE = 'IDLE',
  SENT = 'SENT',
  SENDING = 'SENDING',
  ERROR = 'ERROR'
}
