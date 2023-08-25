import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardComponent } from '../dashboard/card/card/card.component';
import { EditComponent } from '../dashboard/edit/edit.component';

@Component({
  selector: 'app-user-accounts',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.css']
})
export class UserAccountsComponent {
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
  
  
  openDialog(): void {
    
    const dialogRef = this.dialog.open(CardComponent, {
      width: '250px',
      
    });
    
   

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      
    });
   
  }


  openDialog1(): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '250px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      
    });

    
    
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
