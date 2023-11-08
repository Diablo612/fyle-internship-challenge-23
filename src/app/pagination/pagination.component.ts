import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number | undefined;
  @Input() totalPages: number | undefined;
  @Output() pageChange = new EventEmitter<number>();

  onPageChange(page: number) {
    console.log('Page Clicked:', page);
    if (page >= 1 && page <= this.totalPages!) {
      this.pageChange.emit(page);
    }
  }

  range() {
    if (this.totalPages) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    } else {
      return [];
    }
  }
}
