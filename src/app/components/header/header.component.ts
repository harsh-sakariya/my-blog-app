import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('hindi') hindi: ElementRef;
  @ViewChild('english') english: ElementRef;
  showNavbar: boolean = false;
  subscription: Subscription;
  userName: string;

  constructor(private authService: AuthService, private translate: TranslateService) { }

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

  onHindi(){
    this.english.nativeElement.classList.remove('active');
    this.hindi.nativeElement.className += " active";
    this.translate.use('hn');
  }

  onEnglish(){
    this.english.nativeElement.className += " active";
    this.hindi.nativeElement.classList.remove('active');
    this.translate.use('en');
  }
}
