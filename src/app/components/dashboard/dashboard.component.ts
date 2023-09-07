import { Component } from '@angular/core';
import { AllService } from 'src/app/services/all.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userData: any = {}
  constructor(private allService: AllService) {}
  
  ngOnInit() {
    this.userData = this.allService.userData;
  }
}
