import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-table-game',
  templateUrl: './table-game.component.html',
  styleUrls: ['./table-game.component.css']
})
export class TableGameComponent implements OnInit {
  constructor(private route:Router,
    private usersService: UsersService) { }

  @Input() winnerX = 0;
  @Input() winnerO = 0;
  @Output() changed = new EventEmitter<number>();
  fieldMarkNull = false;
  userLogIn : object | any;
  
  ngOnInit(): void {
  }
  cleanUp=()=>{
    this.winnerX = 0;
    this.winnerO = 0;
    this.changed.emit(this.winnerX);
    this.fieldMarkNull = false;

    // this.winnerOchanged.emit(this.winnerO);
  }
  recordResult(){

    if(this.winnerX !=0 || this.winnerO !=0 ){
      this.route.navigate(['record-result'], {
        queryParams:{winnerX:this.winnerX,winnerO:this.winnerO}
      });
    }
    else{
      this.fieldMarkNull = true;
    }

    if(!this.usersService.getLogin()){
      this.route.navigate(['sign-in']);
    }
   
  }
}
