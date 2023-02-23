import { Component } from '@angular/core';
import { Book } from 'src/app/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlist: Book[] = [];

  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.bookService.wishlist$.subscribe((data: any) => {
      this.wishlist = data;
    })
  }

  deleteBook(book: Book) {
    this.bookService.deleteWishlist(book);
  }
}
