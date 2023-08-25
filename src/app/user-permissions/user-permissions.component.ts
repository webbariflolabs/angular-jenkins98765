import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-permissions',
  templateUrl: './user-permissions.component.html',
  styleUrls: ['./user-permissions.component.css']
})

export class UserPermissionsComponent {
  events: string[] = [];
  opened: boolean = false;
 
  constructor(private router: Router){}

  onLogout():void{
    this.router.navigate(['/login'])


  }
  onLogout1():void{
    this.router.navigate(['/login'])


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

 


}
