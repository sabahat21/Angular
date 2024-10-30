import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmittedFormPageRoutingModule } from './submitted-form-routing.module';

import { SubmittedFormPage } from './submitted-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmittedFormPageRoutingModule
  ],
  declarations: [SubmittedFormPage]
})
export class SubmittedFormPageModule {}
