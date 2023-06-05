import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router )


  public myForm: FormGroup = this.fb.group({
    name:    ['Lucas', [ Validators.required]],
    lastName:    ['Ciappa', [ Validators.required]],
    dni:    ['40513849', [ Validators.required]],
    phone:    ['1531238122', [ Validators.required]],
    email:    ['lucasciappa97@gmail.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],
  });


  register() {
    const { email, password, name, lastName, dni, phone } = this.myForm.value;

    this.authService.register(email, password, name, lastName, dni, phone)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error' )
        }
      })

  }

}
