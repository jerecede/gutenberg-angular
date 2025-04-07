import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookHeaderComponent } from "./components/book-header/book-header.component";
import { BookFooterComponent } from "./components/book-footer/book-footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookListComponent, BookHeaderComponent, BookFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gutenberg-angular';
}
