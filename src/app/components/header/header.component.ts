import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  showNavbar: boolean = false;
  subscription: Subscription;
  userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.authService.userLoggedIn.subscribe(
      (currentUsername) => {
        this.userName = currentUsername;
      }
    )
  }

  onToggleNavbar(){
    this.showNavbar = !this.showNavbar;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
