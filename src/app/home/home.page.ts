import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  totalWater: number[];
  waterAmount: number;

  constructor (public router: Router) {

    this.totalWater = [ ]; 
  }


  addWater(){

    if( this.waterAmount > 0 ){
          this.totalWater.push( this.waterAmount );
          this.waterAmount = null;
    }
    if( this.waterAmount > 64){
      alert("You've Reached Your Goal!");

    }

}


  gotoAbout(){
    this.router.navigate(['/about']);
  }
}
