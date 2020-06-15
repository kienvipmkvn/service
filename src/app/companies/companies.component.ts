import { Component, OnInit } from '@angular/core';
import { Company } from './company.model';
import { CompanyService } from '../shared/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  company:Company;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.companySelected.subscribe(company=>{
      this.company = company;
    })
  }
}
