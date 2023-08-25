import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';
import { DialogContent1Component } from '../dialog-content1/dialog-content1.component';
import { DialogContent2Component } from '../dialog-content2/dialog-content2.component';
import { DialogContent3Component } from '../dialog-content3/dialog-content3.component';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}


@Component({
  selector: 'app-device-assign-controls',
  templateUrl: './device-assign-controls.component.html',
  styleUrls: ['./device-assign-controls.component.css']
})
export class DeviceAssignControlsComponent {
  events: string[] = [];
  opened: boolean = false;
  shouldRun: boolean = true;
  accountId: string[] = [];
  accountName: string[] = [];
  admin:string[] = [];


  constructor(private router: Router, public dialog : MatDialog ) {
    // this.loginform-this.formBuilder.group
  }


  subMenuStates: { [key: string]: boolean } = {};

  
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    
  };

  
  /*openDialog6(): void {
    const dialogRef = this.dialog.open(Edit4Component, {
      width: '480px',
      data: { accountId: this.accountId, accountName: this.accountName },
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      this.accountId = result;
      this.accountName = result;
      
    });
*/

openDialog(): void {
  const dialogRef = this.dialog.open(DialogContentComponent, {
    width: '600px', // Set the desired width
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed:', result);
  });
}

openDialog1(): void {
  const dialogRef = this.dialog.open(DialogContent1Component, {
    width: '700px', // Set the desired width
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed:', result);
  });
}

openDialog2(): void {
  const dialogRef = this.dialog.open(DialogContent2Component, {
    width: '500px', // Set the desired width
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed:', result);
  });
}

openDialog3(): void {
  const dialogRef = this.dialog.open(DialogContent3Component, {
    width: '500px', // Set the desired width
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Dialog closed:', result);
  });
}

  
 

  


  // ():void{
  //   this.http.post("http://127.0.0.1:8000/admin",DialogData)
  // }

  
  
 

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

}
