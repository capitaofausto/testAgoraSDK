import { Component, NgZone } from '@angular/core';
import { DemoSharedAgora } from '@demo/shared';
import { Agora } from '@nativescript/agora';

@Component({
	selector: 'demo-agora',
	templateUrl: 'agora.component.html',
})
export class AgoraComponent {
	demoShared: Agora;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		// this.demoShared = new DemoSharedAgora();
		this.demoShared = new Agora();
	}

	start() {
		this.demoShared.start();
	}
}
