import { Component } from '@angular/core';
import { BookPaginatorComponent } from "../book-paginator/book-paginator.component";

@Component({
  selector: 'app-book-footer',
  imports: [BookPaginatorComponent],
  templateUrl: './book-footer.component.html',
  styleUrl: './book-footer.component.scss'
})
export class BookFooterComponent {

}
