import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from './book';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  API_URL = 'http://localhost:8081/books';

  constructor(private http: HttpClient) {
  }

  getList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL);
  }

  add(book: Book): Observable<Book> {
    return this.http.post<Book>(this.API_URL, book);
  }

  edit(id: string, book: Book): Observable<Book> {
    return this.http.put<Book>(this.API_URL + `/${id}`, book);
  }
}
