import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { DisableShadowDirective } from './directives/disable-shadow.directive';
import { DisabledDirective } from './directives/disabled.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DisableShadowDirective,
    DisabledDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
