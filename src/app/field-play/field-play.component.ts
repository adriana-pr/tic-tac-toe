import { Component, OnInit } from '@angular/core';
import {calculateWinner} from '../playWinner'

@Component({
  selector: 'app-field-play',
  templateUrl: './field-play.component.html',
  styleUrls: ['./field-play.component.css']
})
export class FieldPlayComponent implements OnInit {
[x: string]: any;
   board = Array(9).fill(null);
   xNext=true;
   sign=''
   winnerX=0
   winnerO=0
   winner = calculateWinner(this.board);
  constructor() { }
  ngOnInit(): void {
  }

  onClickFieldCell=(index:any)=>{

    const boardCopy = [...this.board]
    if(this.winner || boardCopy[index]){
      return;
    }
    boardCopy[index] = this.xNext ?"X":"O";
    this.board = boardCopy; 
    this.xNext = !this.xNext;
    this.sign=boardCopy[index];
    this.winner = calculateWinner(this.board);
    if(this.winner && !this.xNext) this.winnerX++;
    else if(this.winner && this.xNext) this.winnerO++;
    if(!this.board.includes(null))
    this.winner = "draw";

    
  }

  onClickCleanUp=()=>{
    console.log(this.winner);

    this.board = Array(9).fill(null);
    this.winner = calculateWinner(this.board);
    this.xNext=true
    
  }
  clearValues=(newItems:any)=>{
    this.winnerX=newItems
    this.winnerO=newItems
  }
}
