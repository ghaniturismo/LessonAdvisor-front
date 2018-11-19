import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {User_profilComponent} from './user_profil/user_profil.component';
import {LessonPlace_formComponent} from './lessonPlace_form/lessonPlace_form.component';
import {ContainerComponent} from './container/container.component';
import {ListGarderieComponent} from './container/list-garderie/list-garderie.component';
import {OrgDetailsComponent} from './container/org-details/org-details.component';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profil/:mode', component: User_profilComponent },
  { path: 'org', component: LessonPlace_formComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lessonadvisor', component: ContainerComponent , children: [
      { path: 'list', component: ListGarderieComponent },
      { path: 'detail/:index', component: OrgDetailsComponent }
    ]},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
