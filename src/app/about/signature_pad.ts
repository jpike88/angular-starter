import { Component, ViewChild, Input } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
	selector: 'signature-pad-field',
	template: `
	<signature-pad class="signatureCanvas"
	#signaturePad
	[options]="signaturePadOptions"
	(onEndEvent)="drawComplete()" ></signature-pad>
	<button mat-button (click)="clearSignature()">clear</button>
	`,
	styles: [`

	::ng-deep .signatureCanvas canvas {
		background-color: white;
		box-shadow: 0px 0px 2px black;
	}

  `]
})
export class SignaturePadFieldComponent {

	@ViewChild(SignaturePad, { static: false }) public signaturePad: SignaturePad;

	public signaturePadOptions: Object = {};

	constructor() {
		// no-op
	}

	public clearSignature = () => {
		this.signaturePad.clear();
	}

	public ngAfterViewInit() {

	}

	public drawComplete() {
		// will be notified of szimek/signature_pad's onEnd event
		console.log(this.signaturePad);
	}

}
