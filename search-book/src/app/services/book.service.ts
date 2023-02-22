import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, tap, of } from 'rxjs';
import { Book } from '../Book';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  booklist: Book[] = [];
  booklist$ = new Subject();
  wishlist: Book[] = [];
  wishlist$ = new Subject();

  constructor(private http: HttpClient) { }

  getBooks(bookname: string) {
    if (bookname.trim() === '') { return of(0); }

    return this.http.get(this.apiUrl + bookname).pipe(
      tap((response: any) => {
        this.booklist = response.items;
        this.booklist$.next(this.booklist);
      })
    );
  }

  // addToWishlist(book: Book): Observable<Book> {
  //   const url = `${this.apiUrl}/${book.id}`;
  //   return this.http.put<Task>(url, task, httpOptions);
  // }
}
