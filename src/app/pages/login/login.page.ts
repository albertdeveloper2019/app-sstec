import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public dataMail: string;
  public dataKey: string;
  public mostrar: boolean;
  //public modalCtrl: ModalController

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public validarUsuario(){

  }// validarUsuario

  public llamarRegistro(){
    this.router.navigateByUrl('/register-user');
  }// llamarRegistro

  public cerrarLogin(){
     
  }// cerrarLogin

}// LoginPage
