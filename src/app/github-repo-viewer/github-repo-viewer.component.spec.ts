import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoViewerComponent } from './github-repo-viewer.component';

describe('GithubRepoViewerComponent', () => {
  let component: GithubRepoViewerComponent;
  let fixture: ComponentFixture<GithubRepoViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubRepoViewerComponent]
    });
    fixture = TestBed.createComponent(GithubRepoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
