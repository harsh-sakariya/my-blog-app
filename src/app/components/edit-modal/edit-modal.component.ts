import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { Blog } from 'src/app/models/blog.model';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css'],
})
export class EditModalComponent implements OnInit {
  dropdownList = [];
  @Input() selectedTags = [];
  dropdownSettings: IDropdownSettings = {};
  @Input() blog: Blog;
  id: number;
  title: string;
  description: string = '';
  imageUrl: string;
  author: string;
  date: Date;
  subscription: Subscription;
  public Editor = ClassicEditor;

  constructor(
    public activeModal: NgbActiveModal,
    private authService: AuthService,
    private blogService: BlogService
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

    if(this.blog){
      this.id = this.blog.id;
      this.title = this.blog.title;
      this.description = this.blog.description;
      this.imageUrl = this.blog.imageUrl;
      this.author = this.blog.author;
      this.date = this.blog.date;
      this.selectedTags = this.blog.tags;
    }

    this.author = this.authService.getCurrentUsername();
  }

  onSubmit(blogForm){
    if(this.blog){
      this.blogService.editBlog(this.blog.id, {...blogForm.value, id: this.id ,date: this.date, publishBy: this.authService.currentUserId});
      this.id = null;
      this.blog = null;
      this.activeModal.close();
    }
  }
}
