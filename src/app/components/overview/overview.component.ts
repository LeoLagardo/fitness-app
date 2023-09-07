import { Component } from '@angular/core';
import { AllService } from 'src/app/services/all.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
 userdata: any = {};
 date = '09-07-2023';
 dailyData: any = {}

 constructor(
  private allService: AllService
 ) {}

 ngOnInit() {
  this.userdata = this.allService.userData;
  this.getUser();
 }



 getUser() {
   this.allService.getUser(this.userdata.email?.S, this.date).subscribe(res => {
    this.dailyData = res?.data
   })
 }
}
