import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {AppConfig, AppConfigOptions} from './app.config';

export function RunApplication(options: AppConfigOptions) {
    let config = new AppConfig(options);

    platformBrowserDynamic([
        {provide: AppConfig, useValue: config },
        ])
        .bootstrapModule(AppModule);
}
window['RunApplication'] = RunApplication;
