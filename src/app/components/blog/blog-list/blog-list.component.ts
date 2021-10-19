import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];
  afterScrollBlogs: Blog[] = [];
  numberOfBlog: number = 5;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
    this.addBlogs(0, this.numberOfBlog);
  }

  addBlogs(startIndex: number, endIndex: number) {
    for (let i = startIndex; i < endIndex; ++i) {
      if(this.blogs[i] == undefined){
        return;
      }
      this.afterScrollBlogs.push(this.blogs[i]);
    }
  }

  onScroll(){
    const start = this.numberOfBlog;
    this.numberOfBlog += 5;
    this.addBlogs(start, this.numberOfBlog);
  }

  onShowDetails(index: number) {
    this.router.navigate([index], {relativeTo: this.route});
  }

}
