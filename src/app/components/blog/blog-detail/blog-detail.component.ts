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
      if(!this.blogService.getBlogById(this.id)){
        this.router.navigate(['page-not-found']);
      }
      this.blog = this.blogService.getBlogById(this.id);
    });
  }

  onPrevious() {
    const previousId = this.blogService.previousAvailableBlogId(this.id);
    if(previousId){
      this.router.navigate(['../',previousId], {relativeTo: this.route});
    }
    else{
      alert("No more blogs are available!");
      return;
    }
  }

  onNext() {
    const nextId = this.blogService.nextAvailableBlogId(this.id);
    if(nextId){
      this.router.navigate(['../',nextId], {relativeTo: this.route});
    }
    else{
      alert("No more blogs are available!");
      return;
    }
  }

}
