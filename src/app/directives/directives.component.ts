import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public names:string[] = ['Ajay','Anil','Bharath','Chinna','David'];

  public states:string[] = ['Telangana','Andhra','Tamilnadu','kerala'];

  public users:any = [
    {name:'Anil',age:20,package:10},
    {name:'Amith',age:21,package:11},
    {name:'Raju',age:22,package:12},
    {name:'Ramesh',age:23,package:13},
  ];

  public time:number = 14;

  constructor() { }

  ngOnInit(): void {
  }

}
