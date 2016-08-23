import {bootstrap}    from 'angular2/platform/browser'
import {SimpleRouting} from './app.component.ts'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {provide} from 'angular2/core';
import {LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';
import {enableProdMode} from 'angular2/core'
enableProdMode();
bootstrap(SimpleRouting,[ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);