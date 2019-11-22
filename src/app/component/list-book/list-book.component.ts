import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';
import {Book} from '../../book';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  books: Book[];
  successMessage: string;
  errorMessage: string;
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

  addBook(formBook) {
    this.bookService.add(formBook.value).subscribe(() => {
      console.log('add success! ');
      formBook.resetForm();
    }, error1 => {
      console.log('error!' + error1);
    });
  }

  status(id: number) {
    this.books[id].read = true;
    this.bookService.edit(id + '', this.books[id]).subscribe(() => {
      console.log('success! ');
    }, error1 => {
      console.log('error! ' + error1);
    });
  }
}
