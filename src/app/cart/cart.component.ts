import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';


import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  list;
  checkoutForm;

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });


  constructor(private route: ActivatedRoute,
    private cartService: CartService,
    private formBuilder: FormBuilder,) {
    this.list = this.cartService.getList();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      email: ''
    });
  }

  onSubmit(customerData) {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateName() {
    //this.name.setValue('Nancy');
  }

  ngOnInit() {

  }


}
