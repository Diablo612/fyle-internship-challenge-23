import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-github-repo-viewer',
  templateUrl: './github-repo-viewer.component.html',
  styleUrls: ['./github-repo-viewer.component.scss']
})
export class GithubRepoViewerComponent {
  githubUsername: string = ''; // Initialize with an empty string
  userData: any;
  repositories: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  pagedRepositories: any[] = [];
  sortingOptions: string[] = ['Alphabetical Asc', 'Alphabetical Desc', 'Publish Time Asc', 'Publish Time Desc'];
  selectedSortOption: string = 'Alphabetical Asc';
  totalItems!: number; // Use "!" to indicate that it will be initialized
  totalPages!: number; // Use "!" to indicate that it will be initialized

  constructor(private apiService: ApiService) {}

  onUsernameEntered() {
    this.apiService.getUser(this.githubUsername).subscribe(
      (data: any) => {
        this.userData = data;
        this.loadRepositories();
      },
      (error) => {
        console.error('Error fetching GitHub user data', error);
      }
    );
  }

  loadRepositories() {
    if (this.userData && this.userData.login) {
      const pageStart = (this.currentPage - 1) * this.itemsPerPage; // Calculate the starting index for the current page
      const pageEnd = pageStart + this.itemsPerPage; // Calculate the ending index for the current page  

      this.apiService.getRepos(this.githubUsername, this.currentPage, this.itemsPerPage).subscribe(
        (repos: any) => {
          this.repositories = repos;
          this.totalItems = 100;
          console.log('totalItems:', this.totalItems);
          this.calculateTotalPages();
          this.sortRepositories();
        },
        (error) => {
          console.error('Error fetching GitHub repositories', error);
        }
      );
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadRepositories();
  }

  onSortOptionChange() {
    this.sortRepositories();
  }

  sortRepositories() {
    if (this.selectedSortOption === 'Alphabetical Asc') {
      this.repositories.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedSortOption === 'Alphabetical Desc') {
      this.repositories.sort((a, b) => b.name.localeCompare(a.name));
    } else if (this.selectedSortOption === 'Publish Time Asc') {
      this.repositories.sort((a, b) => a.created_at.localeCompare(b.created_at));
    } else if (this.selectedSortOption === 'Publish Time Desc') {
      this.repositories.sort((a, b) => b.created_at.localeCompare(a.created_at));
    }
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    console.log('totalPages:', this.totalPages);
  }
}
