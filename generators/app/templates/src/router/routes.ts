/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
<% if (sample === 'hello') { -%>
import {Hello} from './app/hello';
<% } else if (sample === 'techs') { -%>
import {Main} from './app/main';
<% } else { -%>
import {App} from './app/containers/App';
<% } -%>

@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
export class Root {
}

export const routes: RouterConfig = [
  {
    path: '/',
    component: <% if (sample === 'hello') { -%>Hello<% } else if (sample === 'techs') { -%>Main<% } else { -%>App<% } -%>,
    index: true
  }
];