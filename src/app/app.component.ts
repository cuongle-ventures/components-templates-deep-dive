import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common'
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ToggleComponent } from "./toggle/toggle.component";
import { ButtonComponent } from './shared/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
    NgFor,
    HelloWorldComponent,
    NgIf,
    ToggleComponent,
  ],
})
export class AppComponent {
  
}
