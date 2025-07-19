import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../../models';

@Component({
  selector: 'app-post-item',
  imports: [],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css'
})
export class PostItem {
 @Input() post!:Post
 @Output() postChangedEvent = new EventEmitter<Post>();
}
