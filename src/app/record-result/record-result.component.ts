import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-record-result',
  templateUrl: './record-result.component.html',
  styleUrls: ['./record-result.component.css']
})
export class RecordResultComponent implements OnInit {

  form: FormControl | any;
  winnerX: number | any;
  winnerO: number | any;
  users: UsersService | any;
  fieldMarkNull = false;
  // number = numberX;
  constructor(private formBuilder: FormBuilder,
    private activatedroute: ActivatedRoute,
    private usersService: UsersService,
    private route:Router) {

    this.activatedroute.queryParams.subscribe(
      data => {
        this.winnerX = data["winnerX"];
        this.winnerO = data["winnerO"];
        console.log(this.winnerX);
      }
    )
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: "",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO4iNOvgNidyd8XcBW8NcEbz-sad9cGILrfj9YsW2HIbZm7ptPErUNu_DGifKuNwchJKA&usqp=CAU",
      number: this.winnerX,
      mark: "",
      email: "",
      nickname: ""
    });

    this.users = this.usersService.logIn();
    this.users = JSON.parse(this.users);

  }

  record() {
    this.fieldMarkNull = false;
    if (this.form.value.name && this.form.value.img && this.form.value.mark) {
      if (this.form.value.mark == "X") {
        if (this.winnerX == 0) {
          this.fieldMarkNull = true;
        }
        else {
          this.form.value.number = this.winnerX;
        }
      }
      if (this.form.value.mark == "O") {
        if (this.winnerO == 0) {
          this.fieldMarkNull = true;
        }
        else {
  
          this.form.value.number = this.winnerO;
        }
      }

      this.form.value.email = this.users.email;
      this.form.value.nickname = this.users.nickname;

      
      if(!this.fieldMarkNull){
        // this.users = this.usersService.getLeaderBoardStorage();
        // this.users = JSON.parse(this.users);
        // this.form.value ['delete'] = true;
        // this.users.push(this.form.value);
        // console.log(this.form.value);
        // this.usersService.setLeaderBoardStorage(this.users);

        this.usersService.insertUserLeaderBoard(this.form.value).subscribe(
          (data: any) => {
            console.log(data);
          }
        )
        this.usersService.deleteLeaderBoard();
        this.route.navigate(['leader-board']);
        // console.log(this.users);
      }
      

    }

  }

}
