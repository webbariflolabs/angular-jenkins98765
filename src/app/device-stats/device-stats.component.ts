import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardComponent } from '../dashboard/card/card/card.component';
import { Chart, ChartTypeRegistry } from 'chart.js';

@Component({
  selector: 'app-device-stats',
  templateUrl: './device-stats.component.html',
  styleUrls: ['./device-stats.component.css']
})
export class DeviceStatsComponent implements OnInit{
  events: string[] = [];
  opened: boolean = false;
  LinechartInstance!: Chart;
  


  subMenuStates: { [key: string]: boolean } = {};


  accountId: string[] = [];
  accountName: string[] = [];

  constructor(public dialog: MatDialog, private router: Router) {
    window.onload=()=>{
      console.log('LOADED')
    }
  }

  updateInterval=20;
  numberElements=200;
  updateCount=0;



  onLogout():void{
    this.router.navigate(['/login'])

  }


  onLogout1():void{
    this.router.navigate(['/login'])

  }
  
  
 ngOnInit(): void {
   this.LinechartInstance = new Chart('linechart', {
     type: 'line',
     data: {
       labels: ['12AM', '6AM', '12PM', '6PM', '12AM'],
       datasets: [{
         label: 'DO',
         data: [1.0, 0.8, 0.6, 0.4, 0.2, 0, -0.2, -0.4, -0.6, -0.8, -1.0],
         fill: false,
         borderColor: "red",
         borderWidth: 1
       }]
     },
     options: {
       indexAxis: 'x',
       scales: {
         x: {
           beginAtZero: true
         },
         
       },
       animations: {
         tension: {
           duration: 1000,
           easing: 'linear',
           from: 1,
           to: 0,
           loop: true
         }
       },
     
     },
    
   });
 }

 onBackStats():void{
   this.router.navigate(['./action'])
 }


 openDialog7(): void {
   const dialogRef = this.dialog.open(CardComponent, {
     width: '250px',
     data: { accountId: this.accountId, accountName: this.accountName },
     
   });

   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed')
     this.accountId = result;
     this.accountName = result;
     
   });

   
   
 }

 
 
 onRefresh():void{
   this.router.navigate(['./device-stats'])
 }


 



 toggleSubMenu(subMenuKey: string): void {
   this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
 }

 isSubMenuOpen(subMenuKey: string): boolean {
   return this.subMenuStates[subMenuKey] || false;
 }


 onClick7(): void {
   this.router.navigate(['./edit5']);
 }

 onClick8(): void {
   this.router.navigate(['./stat']);
 }

    
    
  }
  
  






