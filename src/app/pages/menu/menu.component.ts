import { Component } from '@angular/core';
import { OrderDetailsService } from '../services/order-details.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

constructor(private service:OrderDetailsService){}
servicedata:any
users:any
ngOnInit():void{
  this.servicedata=this.service.Service_details;
  
  
    this.service.getuser().subscribe(us=>{
      this.users=us
    })

    
    
}
}
