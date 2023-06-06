import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productos: any[] = [];


  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) {}

    getProductList(): void {
      this.productsService.getProductos().subscribe((data: any) => {
        this.productos = data;
        this.productsService.getImageUrl(this.productos);
        console.log(this.productos);
      });
    }

    addToCart(product: any): void {
      this.cartService.addToCart(product);
    }

  async ngOnInit() {
    this.getProductList();

    const data = await this.productsService.getProductos().toPromise();
    if (data) {
      this.productos = data;
      this.productsService.getImageUrl(this.productos);
    }

  }
}