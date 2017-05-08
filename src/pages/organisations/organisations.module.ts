import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Organisations } from './organisations';

@NgModule({
  declarations: [
    Organisations,
  ],
  imports: [
    IonicPageModule.forChild(Organisations),
  ],
  exports: [
    Organisations
  ]
})
export class OrganisationsModule {}
