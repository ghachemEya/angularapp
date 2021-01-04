import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirectiveDirective } from './inscription-disabled-directive.directive';
import { SessionEditFormComponent } from './admin/session-edit-form/session-edit-form.component';
import { SessionAddFormComponent } from './admin/session-add-form/session-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirectiveDirective,
    SessionEditFormComponent,
    SessionAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
