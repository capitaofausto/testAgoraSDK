import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { AgoraComponent } from './agora.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: AgoraComponent }])],
	declarations: [AgoraComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class AgoraModule {}
