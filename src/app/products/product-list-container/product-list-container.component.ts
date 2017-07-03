import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product, Message, ErrorResponse, ResolveEmit } from '../../model/interface';
import { ProductService, ToastService, ConfirmationService } from '../../services';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {
  currentPage: number = 1;
  products: Product[];
  isFinished: boolean = false;
  errorMsg: Message;
  selected = [];
  actionOptions = [
    { value: 'delete', label: 'Delete' },
  ];

  constructor(
    private productService: ProductService,
    private confirmationService: ConfirmationService,
    private toastService: ToastService,
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts()
      .subscribe(
        products => this.products = products.map(product => new Product(product)),
        err => this.handleError(err),
        () => this.isFinished = true,
      );
  }

  removeProduct(product: Product) {
    this.confirmationService
      .create('Are you sure?', 'Do you really want to delete this item?')
      .switchMap((ans: ResolveEmit) => ans.resolved ? this.productService.removeProduct(product._id) : Observable.of(null))
      .subscribe(
        res => {
          if (res) {
            this.products = this.products.filter(item => product._id !== item._id);
            this.toastService.success('Removed!', 'The product was removed from the catalog');
          }
        },
        err => console.log(err),
      );
  }

  handleError(error: ErrorResponse) {
    this.errorMsg = new Message('negative', error.message, 'Ooops..');
  }

  removeSelected(): void {
    const list: Observable<string>[] = this.selected.map(id => this.productService.removeProduct(id));

    Observable.forkJoin(list)
      .subscribe(
        () => null,
        err => console.log(err),
        () => {
          this.products = this.products
            .filter(product => this.selected.indexOf(product._id) === -1)

          if (this.selected.length) {
            this.toastService.success('Removed!', 'The products was removed from the catalog');
          }

          this.selected = [];
        }
      );
  }

  onSelect(product: Product): void {
    const exists = this.selected.find(id => id == product._id);

    if (exists) {
      this.selected = this.selected.filter(id => id !== product._id);
    }
    else {
      this.selected.push(product._id);
    }
  }

  doAction(action) {
    switch (action) {
      case 'delete':
        this.removeSelected();
        break;
    }
  }

}
