import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailComponent } from './components/blog/blog-detail/blog-detail.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { AddBlogComponent } from './components/blog/add-blog/add-blog.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/signup/signup.component';
import { TagConverterPipe } from './pipes/tag-converter.pipe';
import { UserBlogList } from './components/blog/user-blog-list/user-blog-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StringShorterPipe } from './pipes/string-shorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogListComponent,
    AddBlogComponent,
    LoginComponent,
    SignUpComponent,
    UserBlogList,
    TagConverterPipe,
    StringShorterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    NgMultiSelectDropDownModule.forRoot(),
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
