import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/Services/http.service';

@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent {
  pincode:string="";
  pinCodeDetails:any;
  displayErrorMessage:boolean=false;
  constructor( private http:HttpService){}
  VerifyPincode(){
    const endPoint="pin-code-details?"+"pincode="+this.pincode;
this.http.getDataFromServer(endPoint).subscribe((el:any)=>{
  if(el && el.length>0){
    this.displayErrorMessage=false
  }
  else{
    this.displayErrorMessage=true;
  }
}, error=>{
  console.log(error)
})
 
  }
}
