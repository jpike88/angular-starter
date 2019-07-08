import {
  Component,
  OnInit
} from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'about',
  styles: [`
  `],
  template: `
    <h1>About</h1>
    <signature-pad-field></signature-pad-field>
  `
})
export class AboutComponent implements OnInit {

  public localState: any;
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        /**
         * Your resolved data from route.
         */
        this.localState = data.yourData;
      });

    console.log('hello `About` component');
    /**
     * static data that is bundled
     * var mockData = require('assets/mock-data/mock-data.json');
     * console.log('mockData', mockData);
     * if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
     */
    this.asyncDataWithWebpack();
  }
  private asyncDataWithWebpack() {

  }

}
