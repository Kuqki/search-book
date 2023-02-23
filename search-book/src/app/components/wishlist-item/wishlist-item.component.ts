import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent {
  @Input() book!: Book;
  @Output() onDeleteBook: EventEmitter<Book> = new EventEmitter();

  onDelete(book: Book) {
    this.onDeleteBook.emit(book);
  }
}
