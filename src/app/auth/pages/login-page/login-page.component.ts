import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    email:    ['lucasciappa97@gmail.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],
  });

  login() {
    const { email, password } = this.myForm.value;

    console.log(email, password);
    
    // this.authService.login(email, password)
    //   .subscribe({
    //     next: () => this.router.navigateByUrl('/dashboard'),
    //     error: (message) => {
    //       Swal.fire('Error', message, 'error' )
    //     }
    //   })

  }

}
