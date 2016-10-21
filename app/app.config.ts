import {Injectable} from "@angular/core";

export interface AppConfigOptions {
    name: string
    mockAJAX: any
}

@Injectable()
export class AppConfig {
    name: string = '';
    mockAJAX: any;

    constructor(options: AppConfigOptions) {
        Object.assign(this, options);
    }
}
