import {Component} from 'angular2/core';

@Component({
    selector: 'component-one',
    template: 'Component one'
})
export default class ComponentOne {
    console.log(window.location)
}