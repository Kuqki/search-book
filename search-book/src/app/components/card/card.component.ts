import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/Book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book!: Book;
  @Output() OnAddList: EventEmitter<Book> = new EventEmitter();

  OnAdd(book: Book) {
    this.OnAddList.emit(book);
  }
}
