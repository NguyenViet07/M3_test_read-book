import {Component, OnInit} from '@angular/core';
import {Book} from '../../book';
import {BookService} from '../../book.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-read-book',
  templateUrl: './read-book.component.html',
  styleUrls: ['./read-book.component.scss']
})
export class ReadBookComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.showListBook();
  }

  showListBook() {
    this.bookService.getList().subscribe(next => {
      this.books = next;
    });
  }

  updateStatus(id: number) {
    this.books[id].read = false;
    this.bookService.edit(id + '', this.books[id]).subscribe(() => {
      console.log('edit success!');
    }, error1 => {
      console.log('error ! ' + error1);
    });
  }
}
