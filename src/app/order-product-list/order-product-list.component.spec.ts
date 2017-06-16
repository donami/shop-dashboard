import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductListComponent } from './order-product-list.component';

describe('OrderProductListComponent', () => {
  let component: OrderProductListComponent;
  let fixture: ComponentFixture<OrderProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
