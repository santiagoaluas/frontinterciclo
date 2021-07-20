import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public salir(){
    localStorage.removeItem('user')
    window.location.reload()
  }
  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }
}
