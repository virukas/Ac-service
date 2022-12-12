import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { OrderDetailsService } from '../services/order-details.service';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {
  constructor(private param:ActivatedRoute, private service:OrderDetailsService){}
  getManuId:any;
  menudata:any;
  ngOnInit():void{
    this.getManuId=this.param.snapshot.paramMap.get('id');
    console.log(this.getManuId,"getmenu");
    if(this.getManuId)
    {
     this.menudata= this.service.Service_details.filter((value)=>{
       return value.id== this.getManuId;
      });
      console.log(this.menudata,"menudata>>");
    }
  }

}
