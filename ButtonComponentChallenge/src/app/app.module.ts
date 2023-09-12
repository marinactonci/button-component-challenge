import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { DisableShadowDirective } from './directives/disable-shadow.directive';
import { DisabledDirective } from './directives/disabled.directive';
import { InputComponent } from './input/input.component';
import { ErrorDirective } from './directives/error.directive';
import { FullWidthDirective } from './directives/full-width.directive';
import { MultilineDirective } from './directives/multiline.directive';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DisableShadowDirective,
    DisabledDirective,
    InputComponent,
    ErrorDirective,
    FullWidthDirective,
    MultilineDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
