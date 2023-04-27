import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  logIn = this.usersService;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  signOut(){
    this.logIn.logout()
    this.logIn.deleteLeaderBoard();
  }
}
