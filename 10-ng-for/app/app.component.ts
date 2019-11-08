import { Component } from "@angular/core";

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
}

@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      length: {{ passengers.length }}
      <ul>
        <li *ngFor="let passanger of passengers; let i = index">
          {{ i }} : {{ passanger.fullname }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: false
    },
    {
      id: 3,
      fullname: "James",
      checkedIn: true
    },
    {
      id: 4,
      fullname: "Louise",
      checkedIn: true
    },
    {
      id: 5,
      fullname: "Tina",
      checkedIn: false
    }
  ];
}
