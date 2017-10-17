import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; //Forms module - Spotify.

import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormNgmodelComponent } from './demo-form-ngmodel/demo-form-ngmodel.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';
import { UserService } from './user.service';

//HTTP
import { HttpModule } from '@angular/http'; //Forms module - Spotify.
import { HttpSimpleRequestComponent } from './http-simple-request/http-simple-request.component';
import { HttpYoutubeSearchComponent } from './http-youtube-search/http-youtube-search.component'

//HTTP - YOUTUBE SEARCH
import  {YouTubeSearchService, YOUTUBE_API_KEY} from './services/you-tube-search.service';
import  { youTubeSearchInjectables } from './http-youtube-search/you-tube-search.injectables';
import { HttpYoutubeSearchboxComponent } from './http-youtube-searchbox/http-youtube-searchbox.component';
import { HttpYoutubeSearchResultComponent } from './http-youtube-search-result/http-youtube-search-result.component';

//ROUTES
import {RouterModule, Routes } from '@angular/router' //Forms module - Spotify.
import { RoutingHomeComponent } from './routing-home/routing-home.component';

//SPOTIFY
import { AlbumComponent } from './spotify/album/album.component';
import { ArtistComponent } from './spotify/artist/artist.component';
import { SearchComponent } from './spotify/search/search.component';
import { TrackComponent } from './spotify/track/track.component';
import { SpotifyService } from './spotify/services/spotify.service';


//ROUTING GUARDS
import { RoutingLoginComponent } from './routing-login/routing-login.component';
import { RoutingProtectedComponent } from './routing-protected/routing-protected.component'
import { AUTH_PROVIDERS }  from './services/auth.service'
import { LoggedInGuard } from './guards/logged-in.guard'



const routes: Routes = [
  //basic routes
  {path: '', redirectTo: 'formsku', pathMatch: 'full'},
  
  {path: 'inicio', redirectTo: 'formsku'},
  {path: 'formsku', component: DemoFormSkuComponent},
  {path: 'formskuwithbuilder', component: DemoFormSkuWithBuilderComponent},
  {path: 'formwithngmodel', component: DemoFormNgmodelComponent},
  {path: 'httpsimplerequest', component: HttpSimpleRequestComponent},
  {path: 'httpyoutubesearch', component: HttpYoutubeSearchComponent},
  {path: 'routing/spotify', component: SearchComponent},
  {path: 'routing/spotify/tracks/:trackId', component: TrackComponent},
  {path: 'routing/spotify/artists/:artistId', component: ArtistComponent},
  {path: 'routing/spotify/albums/:albumId', component: ArtistComponent},
  {path: 'routing/login', component: RoutingLoginComponent},
  {
    path: 'routing/protected',
    component: RoutingProtectedComponent,
    canActivate: [LoggedInGuard]    
  },
  {path: 'routing/:parameter', component: RoutingHomeComponent},

  /*
  //authentication demo
  ,{path: 'login', component: component: LoginComponent},
  {
    path: 'protected', 
    component: ProtectedComponent, 
    canActivate: [LoggedInGuard]
  },
  //nested
  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes
  }
  */
];


@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormNgmodelComponent,
    UserDemoComponent,
    UserDemoInjectorComponent,
    HttpSimpleRequestComponent,
    HttpYoutubeSearchComponent,
    HttpYoutubeSearchboxComponent,
    HttpYoutubeSearchResultComponent,
    RoutingHomeComponent,
    AlbumComponent,
    ArtistComponent,
    SearchComponent,
    TrackComponent,
    RoutingLoginComponent,
    RoutingProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, // <-- Http - To make it available for injection in components
    RouterModule.forRoot(routes)
  ],
  providers: [ 
    youTubeSearchInjectables, 
    UserService, 
    SpotifyService,
    AUTH_PROVIDERS,
    LoggedInGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

