import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap, of, catchError } from 'rxjs';
import { Book } from '../Book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  booklist: Book[] = [];
  booklist$ = new Subject<Book[]>();
  wishlist: Book[] = [];
  wishlist$ = new Subject<Book[]>();

  constructor(private http: HttpClient) { }

  getBooks(bookname: string) {
    if (bookname.trim() === '') { return of(0); }

    return this.http.get(this.apiUrl + bookname).pipe(
      tap((response: any) => {
        this.booklist = response.items.map((item: any) => {
          return {
            id: item.id,
            picture: item.volumeInfo.imageLinks?.thumbnail || '',
            name: item.volumeInfo.title || '',
            author: item.volumeInfo.authors || [],
            publisher: item.volumeInfo.publisher || '',
            date: item.volumeInfo.publishedDate || '',
            description: item.volumeInfo.description || '',
            onWishlist: false,
          }
        });
        this.booklist$.next(this.booklist);
        console.log(this.booklist);
      }),
      catchError((err: any) => {
        console.log(err);
        return err;
      })
    );
  }

  addWishList(book: Book) {
    this.wishlist.push(book);
    this.wishlist$.next(this.wishlist);
    // console.log(this.wishlist);
  }

  deleteWishlist(book: Book) {
    this.wishlist = this.wishlist.filter((b: Book) => {
      if (b.id === book.id) {
        b.onWishlist = false;
      }
      return b.id !== book.id;
    });
    return this.wishlist$.next(this.wishlist);
  }
}
