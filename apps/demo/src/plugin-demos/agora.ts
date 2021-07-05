import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAgora } from '@demo/shared';
import {} from '@nativescript/agora';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAgora {}
