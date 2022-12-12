import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor(private http:HttpClient) { }

  // service details
 getuser()
{
  return this.http.get("https://jsonplaceholder.typicode.com/users")  
}



  Service_details = [
    {
      id: 1,
      serviceName: "Ac service",
      serviceType: "Dray Service split Ac",
      servicePrice: 450,
      serviceImg: "https://media.gettyimages.com/id/1227299278/photo/a-hired-worker-repairman-cleans-and-repairs-the-air-conditioner.jpg?s=612x612&w=gi&k=20&c=aib6LV9kVXETvQNknDh8zRFHEGQiBVBN6PKK9QJufJQ="
    },
    {
      id: 2,
      serviceName: "Ac service",
      serviceType: "Jet Service for split Ac",
      servicePrice: 1450,
      serviceImg: "https://www.ustadservices.com/assets/img/ustad_ac_service.webp"
    },
    {
      id: 3,
      serviceName: "Ac service",
      serviceType: "wet Service for window Ac",
      servicePrice: 450,
      serviceImg: "https://ilaiyaacservice.in/wp-content/uploads/2016/11/window-ac-repair-service-500x500.jpg"
    },
    
    {
      id: 4,
      serviceName: "Ac service",
      serviceType: " BreakDoown service for split Ac visitcharg",
      servicePrice: 500,
      serviceImg: "https://indiaconnect.com/oc-content/uploads/789/97829.jpg"
    },
    {
      id: 5,
      serviceName: "Ac service",
      serviceType: "Gass charching service for split Ac R22",
      gasswaranty: "three Month waranty",
      servicePrice: 2200,
      serviceImg: "https://us.123rf.com/450wm/leamsign/leamsign2106/leamsign210600150/leamsign210600150.jpg?ver=6"
    },
    {
      id: 6,
      serviceName: "Ac service",
      serviceType: "Gass charching service for split Ac R32",
      gasswaranty: "three Month waranty",
      servicePrice: 3300,
      serviceImg: "https://us.123rf.com/450wm/leamsign/leamsign2106/leamsign210600150/leamsign210600150.jpg?ver=6"
    },
    {
      id: 7,
      serviceName: "Ac service",
      serviceType: "Gass charching service for split Ac R410",
      gasswaranty: "three Month waranty",
      servicePrice: 3800,
      serviceImg: "https://us.123rf.com/450wm/leamsign/leamsign2106/leamsign210600150/leamsign210600150.jpg?ver=6"
    },
    {
      id: 8,
      serviceName: "Ac service",
      serviceType: "Gass charching service for split Ac R99",
      gasswaranty: "three Month waranty",
      servicePrice: 1800,
      serviceImg: "https://us.123rf.com/450wm/leamsign/leamsign2106/leamsign210600150/leamsign210600150.jpg?ver=6"
    },
    {
      id: 9,
      serviceName: "Ac service",
      serviceType: "Gass charching service for split Ac Ra32",
      gasswaranty: "three Month waranty",
      servicePrice: 1600,
      serviceImg: "https://us.123rf.com/450wm/leamsign/leamsign2106/leamsign210600150/leamsign210600150.jpg?ver=6"
    },




  ]


}
