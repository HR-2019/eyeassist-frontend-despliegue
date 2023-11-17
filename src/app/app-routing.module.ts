import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'dash',
        component: DashboardComponent,
      },
      {
        path: 'video',
        component: VideoPlayerComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
  { path: 'home', redirectTo: '/home/dash', pathMatch: 'full' },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
