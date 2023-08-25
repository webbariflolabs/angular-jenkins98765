import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardComponent } from '../dashboard/card/card/card.component';
import { EditComponent } from '../dashboard/edit/edit.component';


@Component({
  selector: 'app-user-account-devices',
  templateUrl: './user-account-devices.component.html',
  styleUrls: ['./user-account-devices.component.css']
})
export class UserAccountDevicesComponent {
  events: string[] = [];
  opened: boolean = false;


  subMenuStates: { [key: string]: boolean } = {};


  accountId: string[] = [];
  accountName: string[] = [];

  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog7(): void {
   /* const dialogRef = this.dialog.open(CardComponent, {
      width: '250px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });*/

    this.router.navigate(['./user-new-device'])

    
    
  }

  openDialog8(): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });

    
    
  }
  
  onLogout():void{
    this.router.navigate(['/login'])

  }


  onLogout1():void{
    this.router.navigate(['/login'])

  }
  openDialog10(): void {
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
    this.router.navigate(['./device-stats']);
  }



}
