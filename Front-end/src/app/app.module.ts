import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ModelService } from "./model.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [ModelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
