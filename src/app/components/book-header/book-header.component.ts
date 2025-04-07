import { Component, inject } from '@angular/core';
import { BookPaginatorComponent } from "../book-paginator/book-paginator.component";
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-header',
  imports: [BookPaginatorComponent],
  templateUrl: './book-header.component.html',
  styleUrl: './book-header.component.scss'
})
export class BookHeaderComponent {
  bookServ= inject(BookService);
}
