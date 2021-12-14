import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgForm } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { BlogService } from 'src/app/services/blog.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  @ViewChild('blogForm') blogForm: NgForm;
  faCalendar = faCalendar;

  dropdownList = [];
  selectedTags = [];
  dropdownSettings: IDropdownSettings = {};
  id: number;
  title: string;
  description: string = '';
  imageUrl: string;
  author: string;
  date: NgbDateStruct;

  public Editor = ClassicEditor;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private authService: AuthService
  ) {}

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
      allowSearchFilter: true,
    };

    this.author = this.authService.getCurrentUsername();
  }

  onSubmit(blogForm) {
    console.log(blogForm.value);
    this.blogService.addBlog({
      ...blogForm.value,
      id: this.blogService.generateRandomId(),
      date: new Date(blogForm.value.date.year, blogForm.value.date.month, blogForm.value.date.day),
      publishBy: this.authService.currentUserId,
    });
    this.router.navigate(['blog']);
  }
}
