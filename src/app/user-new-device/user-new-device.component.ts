import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-new-device',
  templateUrl: './user-new-device.component.html',
  styleUrls: ['./user-new-device.component.css']
})
export class UserNewDeviceComponent {
  events: string[] = [];
  opened: boolean = false;


  constructor(public dialog: MatDialog, private router: Router) {
    // this.loginform-this.formBuilder.group
  }

  
  onLogout():void{
    this.router.navigate(['/login'])


  }
  onLogout1():void{
    this.router.navigate(['/login'])


  }

  OnAction():void{
    this.router.navigate(['./user-account-devices'])
  }
  
  




    
    
  
  subMenuStates: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }

  onPermissions():void{
    this.router.navigate(['./user-permissions']);
  }

 onAccounts():void{
  this.router.navigate(['./user-accounts'])
 }

 onClick():void{
  this.router.navigate(['./user-account-devices']);
}

}
