import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { CartService } from '../../service/cart.service';
import { SubcategoryService } from '../../service/sub-categories.service';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products: any[] = [];
  subcategories: any[] = [];
  selectedCategory: number = 0;
  filteredProducts: any[] = [];
  pageSize = 10;
  currentPage = 0;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private subcategoriesService: SubcategoryService
  ) { }

  // Agregar producto al carrito y mostrar mensaje de éxito
  addToCart(product: any): void {
    this.cartService.addToCart(product);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Producto agregado al carrito!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  ngOnInit(): void {
    // Obtener productos y subcategorías al inicializar el componente
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = this.products;
      this.assignSubcategoryNameAndImageUrl();
    });
    this.subcategoriesService.getSubcategories().subscribe(subcategories => {
      this.subcategories = subcategories;
      this.assignSubcategoryNameAndImageUrl();
    });
  }

  // Filtrar productos por categoría
  filterProducts(category: number) {
    this.selectedCategory = category;
    this.filteredProducts = (category) ? this.products.filter(product => product.id_subcategoria == category) : this.products;
  }

  // Asignar nombre de subcategoría e imagen URL a los productos
  assignSubcategoryNameAndImageUrl() {
    this.productsService.assignSubcategoryNameAndImageUrl(this.products, this.subcategories);
  }

  // Paginación
  get pagedProducts() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  // Cambiar página
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }
}