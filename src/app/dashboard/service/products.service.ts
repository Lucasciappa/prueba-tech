import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productApiUrl = 'https://static.compragamer.com/test/productos.json';
  private imageBaseUrl = 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_';
  private subcategoriasApiUrl = 'https://static.compragamer.com/test/subcategorias.json';
  private cartItems: any[] = [];
  private subcategorias: any[] = [];


  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<any[]>(this.productApiUrl);
  }



    getImageUrl(products: any[]) {
      products.forEach(product => {
        product.imagenes = this.imageBaseUrl + product.imagenes[0].nombre + '-med.jpg';
    });
  }
}