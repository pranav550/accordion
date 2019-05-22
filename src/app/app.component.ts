import { Sidebar } from './../data/sidebar';
import { Component } from '@angular/core';
import { Config} from './accordion/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'accordion';
  menus:any[]= Sidebar
  options: Config = { multi: false };
}
