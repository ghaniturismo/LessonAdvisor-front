import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListLessonAdvisorComponent } from './container/list-lessonAdvisor/list-lessonAdvisor.component';
import { ContainerComponent } from './container/container.component';
import { LessonadvisorDetailsComponent } from './container/lessonadvisor-details/lessonadvisor-details.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { User_profilComponent } from './user_profil/user_profil.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LogService } from './shared/services/log-service/log-service.component';
import { OrgService } from './shared/services/org-service/org-service.component';
import {LessonPlace_formComponent} from './lessonPlace_form/lessonPlace_form.component';
import {APP_ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ListLessonAdvisorComponent,
    ContainerComponent,
    LessonadvisorDetailsComponent,
    User_profilComponent,
    LessonPlace_formComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    APP_ROUTES
  ],
  providers: [
    OrgService,
    LogService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
