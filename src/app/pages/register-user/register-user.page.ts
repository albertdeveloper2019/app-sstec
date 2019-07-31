import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {

  public user = {
    nombre: '',
    telefono: '',
    img: '',
    email: '',
    password: '',
    rol: 'USER_ROLE',
    check: true,
  }
  public mostrar: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public registrar(){

  }// registrar

  public cerrarRegistro(){
    this.router.navigateByUrl('/login');
  }// cerrarRegistro

}// RegisterUserPage
