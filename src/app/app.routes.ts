import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { PollsComponent } from './pages/polls/polls.component';
import { SearchComponent } from './pages/search/search.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'topics',
        component: TopicsComponent
    },
    {
        path: 'polls',
        component: PollsComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'my-profile',
        component: ProfileComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
