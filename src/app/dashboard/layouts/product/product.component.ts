import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { CartService } from '../../service/cart.service';
import { SubcategoryService } from '../../service/sub-categories.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productos: any[] = [];
  subcategorias: any[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private subcategoriesService: SubcategoryService
    ) {}

    getProductList(): void {
      this.productsService.getProductos().subscribe((data: any) => {
        this.productos = data;
        this.productsService.getImageUrl(this.productos);
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


    const subcategories = await this.subcategoriesService.getSubcategories().toPromise();
    if (subcategories) {
      console.error(subcategories);
      this.subcategorias = subcategories;
    }




  }
}