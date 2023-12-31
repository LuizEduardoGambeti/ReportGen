import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html',
  styleUrls: ['./login-cadastro.component.scss']
})
export class LoginCadastroComponent {
  constructor(private router: Router) {}

  public onFormSubmit(): void {
    // Prevent form default submission (though Angular mostly handles this)
    event?.preventDefault();

    // TODO: Validate the user's credentials here

    // After validation, navigate to the dashboard
    this.router.navigate(['/dashboard'], { onSameUrlNavigation: 'reload' });
  }
}
