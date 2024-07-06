import { Injectable } from '@nestjs/common';
import { Product } from 'src/interfaces/products';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, title: 'First Product' },
    { id: 2, title: 'Second Product' },
    { id: 3, title: 'Third Product' },
  ];

  getProducts() {
    return this.products;
  }

  getSingleProduct(id: number): Product | string {
    // return this.products.filter(product => product.id ===);
    const product = this.products.find((product) => product.id === +id);
    if (product) {
      return product;
    }
    return 'Product not found';
  }

  createNew(product: CreateProductDto) {
    this.products.push({
      id: this.products.length + 1,
      ...product,
    });
    return product;
  }

  deleteById(id: number) {
    const product = this.products.filter((product) => product.id !== +id);
    return product;
  }

  updateProduct(id: number, updatedProductDto: UpdateProductDto) {
    const idx = this.products.findIndex((product) => product.id === +id);
    if (idx !== -1) {
      this.products[idx] = {
        ...this.products[idx],
        ...updatedProductDto,
      };
      return this.products[idx];
    }
    return 'Product not found';
  }
}
