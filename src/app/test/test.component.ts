import { Component } from '@angular/core';
import { OrderDetailsService } from '../pages/services/order-details.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  constructor(private service:OrderDetailsService){

  }
  users:any=[]
  user(){
    this.service.getuser().subscribe(us=>{
      this.users=us
    })
  console.log(this.users)
  }



}
