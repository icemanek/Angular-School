import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {User, UserEnum} from '../user/user';

const ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  UserEnum = UserEnum;

  displayedColumns: any[] = [[UserEnum.Id], [UserEnum.Username], [UserEnum.FirstName],
   [UserEnum.LastName], [UserEnum.Email], [UserEnum.Gender] , [UserEnum.Licence],
    [UserEnum.Birth], [UserEnum.Created], [UserEnum.Enabled]];

   @ViewChild(MatSort) sort: MatSort;

   @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private userService: UserService) {

      this.userService.getAll().subscribe(data => {

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    });
  }

  ngOnInit() {
this.dataSource.sort = this.sort;
this.dataSource.paginator = this.paginator;
  }


  getData() {
    this.userService.getAll().subscribe(res => {
       console.log(this.dataSource);
       this.dataSource = res;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
