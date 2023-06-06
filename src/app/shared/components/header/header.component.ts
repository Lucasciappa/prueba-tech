import { Component } from '@angular/core';
import { CartService } from 'src/app/dashboard/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {

  }


  // ngOnInit(): void {
  //   this.cartService.getCartItemCount().subscribe((count: number) => {
  //     this.cartItemCount = count;
  //   });
  // }

}
