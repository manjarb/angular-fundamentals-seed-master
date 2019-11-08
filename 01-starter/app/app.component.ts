import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <input type="text" #username />
      <button (click)="handleClick(username.value)">test</button>
      <img style="max-width: 200px;" [src]="logo" />
      <input
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
      />

      <input type="text" [(ngModel)]="name" />

      <div *ngIf="name.length > 2">Searching for... {{ name }}</div>
    </div>
  `
})
export class AppComponent {
  title = "jarb";
  wow = "e oue";
  logo: string = "https://i.ytimg.com/vi/W0HXYvr9mxY/maxresdefault.jpg";
  name: string = "";

  handleClick(username: string) {
    alert(username);
  }

  handleChange(value: string) {
    this.name = value;
  }
}
