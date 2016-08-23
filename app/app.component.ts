import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import ComponentOne from './component-one.ts';
import ComponentTwo from './component-two.ts';
@Component({
    selector: 'simple-routing',
    directives: [ROUTER_DIRECTIVES]
    template: `<div>
	
	<h1><a class='menu-item' [routerLink]="['/ComponentOne']">One</a>
	<a class='menu-item' [routerLink]="['/ComponentTwo']">Two</a></h1>
	<div>
	  <router-outlet></router-outlet>
	</div>
	
	`
})
@RouteConfig([
    {path: '/componentOne', as: 'ComponentOne', useAsDefault: true, component: ComponentOne},
    {path: '/componentTwo', as: 'ComponentTwo', useAsDefault: false, component: ComponentTwo}
])
export class SimpleRouting {

}