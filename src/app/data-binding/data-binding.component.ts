import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  public age:number = 20;
  public name:string = "Ajay";
  public isIndian: boolean = true;

  public phone:number=4444;

  test(){
    alert("submit clicked");
  }

  test2(){
    alert("Cancel double clicked");
  }
  
  test3(){
    alert("Key pressed");
  }

  test4(){
    alert("mouse entered in button")
  }

  test5(){
    alert("Mouse leave from button");
  }

}
