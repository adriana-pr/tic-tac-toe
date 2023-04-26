import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FieldPlayComponent } from './field-play/field-play.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { FieldCellComponent } from './field-cell/field-cell.component';
import { TableGameComponent } from './table-game/table-game.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuSignInsignUpComponent } from './menu-sign-insign-up/menu-sign-insign-up.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { FooterComponent } from './footer/footer.component';
import { RecordResultComponent } from './record-result/record-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FieldPlayComponent,
    HowToPlayComponent,
    FieldCellComponent,
    TableGameComponent,
    SignInComponent,
    SignUpComponent,
    MenuSignInsignUpComponent,
    LeaderBoardComponent,
    FooterComponent,
    RecordResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
