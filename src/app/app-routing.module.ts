import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldPlayComponent } from './field-play/field-play.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LeaderBoardComponent } from './leader-board/leader-board.component';
import { RecordResultComponent } from './record-result/record-result.component';

const routes: Routes = [{path:"", component:FieldPlayComponent},
{path:"sign-in", component:SignInComponent},
{path:"sign-up", component:SignUpComponent},
{path:"leader-board", component:LeaderBoardComponent},
{path:"record-result", component:RecordResultComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
