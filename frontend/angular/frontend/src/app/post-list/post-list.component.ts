import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Post } from '../post'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.apiService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

}
