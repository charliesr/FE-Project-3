import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-packaging-company',
  templateUrl: './list-packaging-company.component.html',
  styleUrls: ['./list-packaging-company.component.scss']
})
export class ListPackagingCompanyComponent implements OnInit {

  @Input() quotations: string;

  constructor() { }

  ngOnInit() {
  }

}
