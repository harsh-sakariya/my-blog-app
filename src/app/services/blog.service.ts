import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  blogs: Blog[] = [
    new Blog(
      57865245,
      'What is Lorem Ipsum?',
      'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem',
      'https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640__340.jpg',
      'author1',
      [{ tag_id: 8, tag_text: 'css' }, { tag_id: 9, tag_text: 'bootstrap' }],
      new Date(2021, 9, 14, 10, 33, 30, 0)
    ),
    new Blog(
      700141704,
      'Why do we use it?',
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
      'https://cdn.pixabay.com/photo/2015/03/17/14/05/sparkler-677774__340.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      946318304,
      'Where does it come from?',
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia',
      'https://cdn.pixabay.com/photo/2020/08/09/11/31/business-5475283_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      597129803,
      'Where can I get some?',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      84649979,
      'Where can I get some?',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      236776315,
      'Where can I get some?',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      437793415,
      'Where can I get some?',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      876671870,
      'Where can I get some?',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      356145357,
      'Where can I get some?',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      25572388,
      'Where can I get some?',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      9886070,
      'Where can I get some?',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      507416071,
      'Where can I get some?',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
    new Blog(
      258565396,
      'Where can I get some?',
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
      'https://cdn.pixabay.com/photo/2020/11/02/13/24/autumn-colours-5706651_960_720.jpg',
      'author2',
      [{ tag_id: 3, tag_text: 'javascript' }, { tag_id: 4, tag_text: 'typescript' }, { tag_id: 5, tag_text: 'version8' }],
      new Date(2021, 9, 14, 12, 15, 54, 0)
    ),
  ];
  blogUpdated = new Subject<null>();

  getNextIdOfBlog(){
    return this.blogs.length;
  }

  getNumberOfBlogs(){
    return this.blogs.length;
  }

  getBlogs() {
    return this.blogs;
  }

  generateRandomId(){
    return Math.floor(Math.random()*999999999);
  }

  getBlog(index: number) {
    return this.blogs[index];
  }

  getBlogById(id: number){
    return this.blogs.find(blog => id==blog.id);
  }

  addBlog(newBlog: Blog) {
    this.blogs.push(newBlog);
  }

  editBlog(blogId: number, updateBlog: Blog){
    const blogIndex = this.blogs.findIndex(blog => blog.id==blogId);
    this.blogs[blogIndex] = updateBlog;
    this.blogUpdated.next();
  }

  deleteBlog(id: number){
    this.blogs = this.blogs.filter(blog => id!=blog.id);
  }

  getCurrentUserBlogs(userId: number){
    return this.blogs.filter(
      (blog) => {
        return blog.publishBy == userId;
      }
    )
  }

  nextAvailableBlogId(currentBlogId: number){
    const currentIndex = this.blogs.findIndex(blog => currentBlogId==blog.id);
    if(this.blogs[currentIndex+1]){
      return this.blogs[currentIndex+1].id;
    }
    return false;
  }

  previousAvailableBlogId(currentBlogId: number){
    const currentIndex = this.blogs.findIndex(blog => currentBlogId == blog.id);
    if(this.blogs[currentIndex-1]){
      return this.blogs[currentIndex-1].id;
    }
    return false;
  }

}
