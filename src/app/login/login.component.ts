import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public activo : boolean = false;
  public username: String = "";
  public password: String = "";
  public mensaje: String = "";
  constructor(private RestService: RestService) { }

  ngOnInit(): void {
    this.verificar_Login()
  }
  public login(){
    if (this.username.trim() && this.password.trim()){
      const respuesta = this.RestService.Get_Servicios(`https://sleepy-gorge-39698.herokuapp.com/api/User/auth/${this.username}/${this.password}`)
      .subscribe(respuesta => {
        var resp: any = respuesta;
        console.log(resp)
          this.activo = true
          localStorage.setItem('user', JSON.stringify(resp) );
       
      },(error) => {
        console.log(error.error);
        this.mensaje = "!Usuario y password incorrectos!"
       })
    }else{
      this.mensaje = "!Usuario y password incorrectos!"
    }
   
  }

  public verificar_Login(){
    if (localStorage.getItem('user')){
      this.activo = true
    }else{
      this.activo = false
    }
  }

}

