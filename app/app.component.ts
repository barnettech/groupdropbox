import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import ComponentOne from './component-one.ts';
import ComponentTwo from './component-two.ts';
import ComponentThree from './component-three.ts';


@Component({
    selector: 'simple-routing',
    directives: [ROUTER_DIRECTIVES]
    template: `<div>
	
	<h1><a class='menu-item' [routerLink]="['/ComponentOne']">One</a>
		<a class='menu-item' [routerLink]="['/ComponentTwo']">Two</a>
		<a class='menu-item' [routerLink]="['/ComponentThree']">Three</a>
        </h1>
	<div>
	  <router-outlet></router-outlet>
	</div>
	
	`
})
@RouteConfig([
    {path: '/componentOne', as: 'ComponentOne', useAsDefault: true, component: ComponentOne},
    {path: '/componentTwo', as: 'ComponentTwo', useAsDefault: false, component: ComponentTwo},
    {path: '/componentThree', as: 'ComponentThree', useAsDefault: false, component: ComponentThree},
])
export class SimpleRouting {
}
