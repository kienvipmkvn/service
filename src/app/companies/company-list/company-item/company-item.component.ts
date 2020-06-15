import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../company.model';
import { CompanyService } from 'src/app/shared/company.service';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }

  onCompanySelected(){
    this.companyService.companySelected.emit(this.company);
  }

}
