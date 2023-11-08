import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { GithubRepoViewerComponent } from './github-repo-viewer/github-repo-viewer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubRepoViewerComponent,
    PaginationComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
