import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { Users } from '../users';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {

  logIn = this.usersService;
  usersLeaderBoard: Users[] | any;
  usersTemp: Users[] | any;
  userFromStorage: object | any;
  logInUser: [] | any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    // localStorage.clear();

    if (this.usersService.getLeaderBoardStorage() == undefined && this.usersService.getLogin()) {
      this.userFromStorage = this.usersService.logIn();
      this.userFromStorage = JSON.parse(this.userFromStorage);

      this.usersService.getUsersLeaderBoard().subscribe((data: any) => {
        this.usersLeaderBoard = data;
        this.usersService.setLeaderBoardStorage(data);
        this.usersLeaderBoard = this.usersLeaderBoard.filter(
          (user: any) => {
            if (user.nickname == this.userFromStorage.nickname &&
              user.email == this.userFromStorage.email) {
              user['delete'] = true;
              return user;
            }
          });
      });
    }

     else if (this.usersService.getLeaderBoardStorage() == undefined) {
      this.usersService.getUsersLeaderBoard().subscribe((data: any) => {
        this.usersLeaderBoard = data;
        this.usersService.setLeaderBoardStorage(data);
      });
    }

    else if (this.usersService.getLogin()) {
      this.usersTemp = this.usersService.getLeaderBoardStorage();
      this.usersLeaderBoard = JSON.parse(this.usersTemp);
      this.userFromStorage = this.usersService.logIn();
      this.userFromStorage = JSON.parse(this.userFromStorage);

      this.usersLeaderBoard = this.usersLeaderBoard.filter(
        (user: any) => {
          if (user.nickname == this.userFromStorage.nickname &&
            user.email == this.userFromStorage.email) {
            user['delete'] = true;
            return user;
          }
        });
    }
    else {
      this.usersTemp = this.usersService.getLeaderBoardStorage();
      this.usersLeaderBoard = JSON.parse(this.usersTemp);
      // console.log(this.usersLeaderBoard);
    }
  }

  deleteUser(users: Users) {
    // console.log(users);

    this.usersLeaderBoard = this.usersLeaderBoard.filter((user: Users) => user !== users);
    this.usersService.setLeaderBoardStorage(this.usersLeaderBoard);

    this.usersService.delereUsersLeaderBoard(users.id).subscribe(
      res => {
        console.log(res);
      },
      access => {
        console.log(access);
      }
    );
  }
}

