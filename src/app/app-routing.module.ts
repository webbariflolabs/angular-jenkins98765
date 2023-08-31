import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionComponent } from './action/action.component';
import { UsersComponent } from './users/users.component';
import { Action1Component } from './users/action/action1/action1.component';
import { SettingsComponent } from './settings/settings.component';
import { Action2Component } from './settings/action2/action2/action2.component';
import { Edit5Component } from './action/edit5/edit5/edit5.component';
import { StatComponent } from './action/statistics/stat/stat.component';
import { NewdevicesComponent } from './newdevices/newdevices.component';
import { AccountDevicesComponent } from './account-devices/account-devices.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { AdminNewDeviceComponent } from './admin-new-device/admin-new-device.component';
import { AdminDeviceTypesComponent } from './admin-device-types/admin-device-types.component';
import { AdminCreateNewDeviceComponent } from './admin-create-new-device/admin-create-new-device.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';
import { UserAccountDevicesComponent } from './user-account-devices/user-account-devices.component';
import { UserNewDeviceComponent } from './user-new-device/user-new-device.component';
import { DeviceAssignControlsComponent } from './device-assign-controls/device-assign-controls.component';
import { DeviceStatsComponent } from './device-stats/device-stats.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {
    path: 'dashboard-dialog',
    loadChildren: () => import('./dashboard/dashboard-dialog.module').then(m => m.DashboardDialogModule),
  },
  {path:'action',component:ActionComponent},
  {path:'users',component:UsersComponent},
  {path:'action1',component:Action1Component},
  {path:'settings',component:SettingsComponent},
  {path:'action2',component:Action2Component},
  {path:'edit5',component:Edit5Component},
  {path:'stat',component:StatComponent},
  {path: 'newdevices', component: NewdevicesComponent },
  {path: 'account-devices', component:AccountDevicesComponent},
  {path: 'admin-users', component: AdminUsersComponent},
  {path: 'user-permissions', component: UserPermissionsComponent},
  {path: 'admin-new-device', component: AdminNewDeviceComponent},
  {path: 'admin-device-types', component: AdminDeviceTypesComponent},
  {path: 'admin-create-new-device', component:AdminCreateNewDeviceComponent},
  {path: 'user-accounts', component:UserAccountsComponent},
  {path: 'user-account-devices', component: UserAccountDevicesComponent},
  {path: 'user-new-device', component:UserNewDeviceComponent},
  {path: 'device-assign-controls', component:DeviceAssignControlsComponent},
  {path: 'device-stats', component:DeviceStatsComponent}
  
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
