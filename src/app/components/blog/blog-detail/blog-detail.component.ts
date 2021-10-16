import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.blog = this.blogService.getBlog(this.id);
    });
  }

  onPrevious() {
    if(this.id === 0){
      alert("No more blogs are available!");
      return;
    }
    this.router.navigate(['../',this.id-1], {relativeTo: this.route});
  }

  onNext() {
    if(this.id === this.blogService.getNumberOfBlogs()-1){
      alert("No more blogs are available!");
      return;
    }
    this.router.navigate(['../',this.id+1], {relativeTo: this.route});
  }

}
