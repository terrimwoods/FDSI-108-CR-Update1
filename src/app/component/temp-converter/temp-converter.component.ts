import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-converter',
  templateUrl: './temp-converter.component.html',
  styleUrls: ['./temp-converter.component.scss']
})
export class TempConverterComponent implements OnInit {

  fahrenheit = 0;
  celsius= 0;


  constructor() { }

  ngOnInit(): void {
  }
convertToF(){
  // (0 C x 9/5+)+32 =32
  this.fahrenheit =(this.celsius * 9/5)+32;
}
convertToC(){
  this.celsius = (this.fahrenheit - 32)* (5/9);

  }
}

