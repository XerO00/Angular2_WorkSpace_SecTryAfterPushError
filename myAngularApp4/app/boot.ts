import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {UpgradeAdapter} from 'angular2/upgrade';

var adapter = new UpgradeAdapter();


adapter.bootstrap(document.body, ['First App']);