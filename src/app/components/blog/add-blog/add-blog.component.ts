import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/models/blog.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit, OnDestroy {
  @ViewChild('blogForm') blogForm: NgForm;
  subscription: Subscription;
  dropdownList = [];
  selectedTags = [];
  dropdownSettings: IDropdownSettings = {};
  blog: Blog;
  id: number;
  title: string;
  description: string = '';
  imageUrl: string;
  author: string;
  date: Date;

  public Editor = ClassicEditor;

  constructor(private blogService: BlogService, private router: Router, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.dropdownList = [
      { tag_id: 1, tag_text: 'java' },
      { tag_id: 2, tag_text: 'angular' },
      { tag_id: 3, tag_text: 'javascript' },
      { tag_id: 4, tag_text: 'typescript' },
      { tag_id: 5, tag_text: 'version8' },
      { tag_id: 6, tag_text: 'reactJs' },
      { tag_id: 7, tag_text: 'html' },
      { tag_id: 8, tag_text: 'css' },
      { tag_id: 9, tag_text: 'bootstrap' },
      { tag_id: 10, tag_text: 'php' },
      { tag_id: 11, tag_text: 'jquery' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'tag_id',
      textField: 'tag_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        if(params.id){
          this.id = +params.id;
          this.blog = this.blogService.getBlog(this.id);
          this.title = this.blog.title;
          this.description = this.blog.description;
          this.imageUrl = this.blog.imageUrl;
          this.author = this.blog.author;
          this.date = this.blog.date;
          this.selectedTags = this.blog.tags;
        }
      }
    )

    this.author = this.authService.getCurrentUsername();
    
  }

  onSubmit(blogForm){
    if(this.blog){
      this.blogService.editBlog(this.id, {...blogForm.value, id: this.id ,date: this.date, publishBy: this.authService.currentUserId});
      this.id = null;
      this.blog = null;
      this.router.navigate(['blog', 'myblog']);
    }
    else{
      this.blogService.addBlog({...blogForm.value, id: this.blogService.getNextIdOfBlog() ,date: new Date(), publishBy: this.authService.currentUserId });
      this.router.navigate(['blog']);
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
