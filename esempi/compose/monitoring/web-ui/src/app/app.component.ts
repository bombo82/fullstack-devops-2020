import {Component, OnInit} from '@angular/core';
import {QuoteService} from './quote.service';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private quoteService: QuoteService) {
  }

  title = 'web-ui';

  quotes: Quote[] = undefined;

  model: Quote = {text: '', author: ''};

  ngOnInit(): void {
    this.list();
  }


  onSubmit(): void {
    this.quoteService.create(this.model)
      .subscribe(_ => this.list());
  }

  newQuote(): void {
    this.model = {text: '', author: ''};
  }

  private list(): void {
    this.quoteService.list()
      .subscribe((quotes: any) => this.quotes = quotes);
  }
}
