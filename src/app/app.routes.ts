import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home', 
        title: 'ThoughtBoard - Home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'topics',
        title: 'ThoughtBoard - Topics',
        loadComponent: () => import('./pages/topics/topics.component').then(m => m.TopicsComponent)
    },
    {
        path: 'polls',
        title: 'ThoughtBoard - Polls',
        loadComponent: () => import('./pages/polls/polls.component').then(m => m.PollsComponent)
    },
    {
        path: 'search',
        title: 'ThoughtBoard - Search Topics',
        loadComponent: () => import('./pages/search/search.component').then(m => m.SearchComponent)
    },
    {
        path: 'my-profile',
        title: 'ThoughtBoard - My Profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'signup',
        title: 'ThoughtBoard - Signup',
        loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent)
    },
    {
        path: 'login',
        title: 'ThoughtBoard - Login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        title: 'ThoughtBoard - 404',
        loadComponent: () => import('./shared/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    }
];
