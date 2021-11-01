import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Blog } from 'src/app/models/blog.model';
import { AuthService } from 'src/app/services/auth.service';

import { BlogService } from 'src/app/services/blog.service';
import { EditModalComponent } from '../../edit-modal/edit-modal.component';

@Component({
  selector: 'app-user-blog-list',
  templateUrl: './user-blog-list.component.html',
})
export class UserBlogList implements OnInit {
  userBlogs: Blog[];

  constructor(
    private blogService: BlogService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.userBlogs = this.blogService.getCurrentUserBlogs(this.authService.currentUserId);
    
    this.blogService.blogUpdated.subscribe(
      () => {
        this.userBlogs = this.blogService.getCurrentUserBlogs(this.authService.currentUserId);
      }
    )
  }

  onEdit(blogId: number) {
    const loginModal = this.modalService.open(EditModalComponent, { size: 'xl', scrollable: true });
    loginModal.componentInstance.blog = this.blogService.getBlog(blogId);
    // this.router.navigate(['../', blogId, 'edit'], {relativeTo: this.route});
  }

  onDelete(blogId: number) {
    this.blogService.deleteBlog(blogId);
    this.userBlogs = this.blogService.getCurrentUserBlogs(
      this.authService.currentUserId
    );
  }

  onViewDetails(blogId: number) {
    this.router.navigate(['blog', blogId]);
  }
}
