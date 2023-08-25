import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AdminCreateNewDeviceComponent } from '../admin-create-new-device/admin-create-new-device.component';
import { DeviceEditComponent } from '../device-edit/device-edit.component';
@Component({
  selector: 'app-admin-device-types',
  templateUrl: './admin-device-types.component.html',
  styleUrls: ['./admin-device-types.component.css']
})
export class AdminDeviceTypesComponent {
  events: string[] = [];
  opened: boolean = false;
  shouldRun: boolean = true;
  accountId: string[] = [];
  accountName: string[] = [];
  admin:string[] = [];
 

  constructor(private router: Router, public dialog : MatDialog ) {
    // this.loginform-this.formBuilder.group
  }



  // ():void{
  //   this.http.post("http://127.0.0.1:8000/admin",DialogData)
  // }

  
  
  subMenuStates: { [key: string]: boolean } = {};

  toggleSubMenu(subMenuKey: string): void {
    this.subMenuStates[subMenuKey] = !this.subMenuStates[subMenuKey];
  }

  isSubMenuOpen(subMenuKey: string): boolean {
    return this.subMenuStates[subMenuKey] || false;
  }




  onLogout1():void{
    this.router.navigate(['/login'])


  }

  onLogout():void{
    this.router.navigate(['/login'])


  }


  onAddUser(): void {
    const dialogRef = this.dialog.open(AdminCreateNewDeviceComponent, {
      width: '400px',
      
    });

    dialogRef.afterClosed().subscribe(result => {      
    });
    
}

onEditDevice():void{
  const dialogRef = this.dialog.open(DeviceEditComponent, {
    width: '400px',
    
  });

  dialogRef.afterClosed().subscribe(result => {      
  });
}


onAssignedCntrls():void{
  this.router.navigate(['./device-assign-controls'])

}

}