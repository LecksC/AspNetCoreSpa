import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

import { DataService } from './data.service';

@Injectable()
export class ApiTranslationLoader implements TranslateLoader {

    constructor(public dataService: DataService) { }

    public getTranslation(lang: string): Observable<any> {
        return this.dataService.get('api/content?lang=' + (lang || 'en'));
    }
}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class CustomMissingTranslationHandler implements MissingTranslationHandler {
    public handle(params: MissingTranslationHandlerParams) {
        return params.key;
    }
}
