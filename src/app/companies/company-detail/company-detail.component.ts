import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../company.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  @Input() company: Company = null;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  toProduct(){
    this.productService.addProducts(this.company.products);
  }
}
