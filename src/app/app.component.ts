import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  hoa = {
    name: 'Nam',
    age: 22
  };
  handle() {
    alert('Hello');
  }
}
