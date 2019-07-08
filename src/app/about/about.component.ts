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
export class AboutComponent {

}
