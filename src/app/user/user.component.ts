import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public listaUsuarios: any =[]
  public usuario: any = {}
  constructor(private RestService: RestService) { }

  ngOnInit(): void {
    this.Get_User()
  }
  public Get_User(){
    const respuesta = this.RestService.Get_Servicios(`https://sleepy-gorge-39698.herokuapp.com/api/User/alluser`)
    .subscribe(respuesta => {
      var resp: any = respuesta;
      console.log( resp)
        this.listaUsuarios = resp
     
    })
  }
  public Details_User(idUsuario: string){
    try {
      if (idUsuario !== ""){
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        
        this.usuario = this.listaUsuarios.filter((usuario:any) => usuario.id === idUsuario)[0];
       
        var date_test = new Date(this.usuario.fecha.toString());
        console.log(dd)
        console.log(date_test.getDate())
  
        if (dd == String(date_test.getDate()).padStart(2, '0') &&  mm == String(date_test.getMonth() + 1).padStart(2, '0')){
          this.usuario = {...this.usuario, cumple: true}
        }else{
          this.usuario = {...this.usuario, cumple: false}
        }
        
        console.log(this.usuario)
      }
    } catch (error) {
      
    }
   
   
  }
}
