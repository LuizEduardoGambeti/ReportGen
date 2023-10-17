import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router) {}

  public onFormSubmit(): void {
    // Prevent form default submission (though Angular mostly handles this)
    event?.preventDefault();

    // TODO: Validate the user's credentials here

    // After validation, navigate to the dashboard
    this.router.navigate(['cadastro/relatorio'], { onSameUrlNavigation: 'reload' });
  }

}
