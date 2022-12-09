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
    {name:'Anil',age:10,package:8},
    {name:'Amith',age:12,package:9},
    {name:'Raju',age:22,package:11},
    {name:'Ramesh',age:23,package:13},
    {name:'Raju',age:30,package:14},
    {name:'Ramesh',age:35,package:15},
  ];

  public time:number = 14;

  public today:any = new Date();

  public user:any = {name:'abc',age:20};

  constructor() { }

  ngOnInit(): void {
  }

}
