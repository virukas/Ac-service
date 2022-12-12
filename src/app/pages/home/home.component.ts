import { Component } from '@angular/core';
import { OrderDetailsService } from '../services/order-details.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:OrderDetailsService){}
  serviceData:any;
  ngOnInit():void{
    this.serviceData=this.service.Service_details;
  }
}
