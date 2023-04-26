import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private login = false;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:8888/AngularPHP/getUsers.php');
  }
  getUsersLeaderBoard(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:8888/AngularPHP/getUsersLeaderBoard.php');
  }

  delereUsersLeaderBoard(id: number): Observable<Users[]> {
    return this.http.delete<Users[]>('http://localhost:8888/AngularPHP/delete.php?id=' + id);
  }
  insertUser(user: Users) {
    return this.http.post('http://localhost:8888/AngularPHP/insertUser.php', user);
  }
  insertUserLeaderBoard(user: Users) {
    return this.http.post('http://localhost:8888/AngularPHP/insertUserLeaderBoard.php', user);
  }

  getUser(user: Users) {
    return this.http.post('http://localhost:8888/AngularPHP/getUser.php', user);
  }


  logIn() {
    this.login = true;
    return localStorage.getItem('login');
  }

  getLogin() {
    return this.login;
  }

  logout() {
    this.login = false;
    localStorage.removeItem("login");
  }
  deleteLeaderBoard() {
    localStorage.removeItem("leaderBoard");
  }

  getLeaderBoardStorage() {
    return localStorage.getItem('leaderBoard');
  }
  setLeaderBoardStorage(data: Users[]) {
    localStorage.setItem('leaderBoard', JSON.stringify(data));
  }
}
