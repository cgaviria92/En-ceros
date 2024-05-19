import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterUserByNamePipe } from './pipes/filter-user-by-name/filter-user-by-name.pipe';

@NgModule({
  declarations: [FilterUserByNamePipe],
  imports: [CommonModule],
  exports: [FilterUserByNamePipe]
})
export class SharedModule { }
    