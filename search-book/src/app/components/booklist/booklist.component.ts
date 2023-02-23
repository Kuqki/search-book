import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
  books: Book[] = []
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.booklist$.subscribe((data: any) => {
      this.books = data;
    });
  }

  addList(book: Book) {
    // console.log(book);
    if (!book.onWishlist) {
      book.onWishlist = true;
      this.bookService.addWishList(book);
    }
  }
}
