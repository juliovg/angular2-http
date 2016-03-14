import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import { HTTP_PROVIDERS } from 'angular2/http';

import { SimpleHTTPComponent } from './componentes/SimpleHTTPComponent';


@Component({
    selector: 'http-app',
    directives: [
        SimpleHTTPComponent
    ],
    template: `
  <div class="container">
    <h1>julio</h1>

    <simple-http></simple-http>

    <!--
    <hr/>
    <more-http></more-http>
    <hr/>
    <youtube-search></youtube-search>
    -->
  </div>
  `
})
class HttpApp {
}

bootstrap(HttpApp, [
    HTTP_PROVIDERS
]);
