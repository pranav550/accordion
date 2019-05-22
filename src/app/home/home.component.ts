import { HomeService } from './../../services/home.service';
import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import {Home} from "./home";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = [
    "name", "capital", "flag", "currencies", "population", "region", "alpha2Code"    
  ];
  dataSource: MatTableDataSource<Home>;
  allData: Home[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild("table") table: ElementRef;
  constructor(private homeService:HomeService) {
        
   }

  ngOnInit() {
    this.defaultLoad();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  }
  /* Defining defaultLoad Function for subscribe get user method*/
  defaultLoad(){
    this.homeService.getUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
