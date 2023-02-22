import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, debounce, debounceTime, fromEvent, mergeMap, switchMap } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  bookname: string = "";
  subsq = new Subscription();
  form!: FormGroup;

  constructor(private bookService: BookService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      bookinput: '',
    });

    this.form
      .get('bookinput')
      ?.valueChanges.pipe(
        debounceTime(500),
        mergeMap((_) => {
          return this.bookService.getBooks(this.bookname);
        })
      )
      .subscribe((response: any) => {
        console.log(response.items);
      });
  }
  ngOnDestroy(): void {
    this.subsq.unsubscribe();
  }
}
