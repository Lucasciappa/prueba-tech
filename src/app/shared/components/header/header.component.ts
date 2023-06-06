import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartItemCount: number = 0;

  private authService = inject( AuthService );

  public user = computed(() => this.authService.currentUser() );

  constructor() { }

  onClick() {
    this.authService.logout();
  }
}


  // ngOnInit(): void {
  //   this.cartService.getCartItemCount().subscribe((count: number) => {
  //     this.cartItemCount = count;
  //   });
  // }

