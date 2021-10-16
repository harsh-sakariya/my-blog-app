import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../models/user.model";

@Injectable({providedIn: 'root'})
export class AuthService{ 
  userLoggedIn = new Subject<string>();
  private isLoggedIn: boolean = false;
  private currentUsernameOrEmail: string;
  currentUserId: number;

  login(user: User){
    this.isLoggedIn = true;
    if(user.username){
      this.currentUsernameOrEmail = user.username;
    }
    else{
      this.currentUsernameOrEmail = user.email;
    }
    this.currentUserId = Math.floor(Math.random() * (999999999 - 100000000)) + 100000000; 
    this.userLoggedIn.next(this.currentUsernameOrEmail);
    console.log(user);
  }

  getAuthStatus(): boolean {
    return this.isLoggedIn;
  }

  getCurrentUsername(){
    return this.currentUsernameOrEmail;
  }
}