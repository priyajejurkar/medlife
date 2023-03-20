import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/Services/http.service';

@Component({
  selector: 'app-top-deals',
  templateUrl: './top-deals.component.html',
  styleUrls: ['./top-deals.component.scss']
})
export class TopDealsComponent  implements OnInit{ 
  topDeals:any[]= [];
productImageSlug: any;
  constructor(private http:HttpService){}
  ngOnInit(): void {
   this.getTopDeals();
  }
  getTopDeals(){
    this.http.getDataFromServer("top-deals").subscribe((el:any)=>{
    if(el && el.length>0){
      this.topDeals= el;
      console.log("TopDeals" ,this.topDeals)
    }
    } ,error=>{
      console.log(error)
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

