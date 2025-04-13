import { Component } from '@angular/core';
import { Topic } from '../../shared/models/Topic';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TopicService } from '../../shared/services/topic.service';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search',
  imports: [
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatCard,
    MatCardModule,
    MatTableModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: true
})
export class SearchComponent {
  searchText: string = '';
  foundTopics: Topic[] = [];
  displayedColumns: string[] = ['id', 'name', 'createdBy', 'createdAt', 'actions']

  constructor(private topicService: TopicService) {

  }

  onSearchFilterChange(searchText: string): void {
    this.foundTopics = [];
    let topics = this.topicService.getAllTopics();
    if (searchText.length === 0) {
      return;
    }

    for (let i = 0; i < topics.length; i++) {
      if (topics[i].name.toLowerCase().includes(searchText)) {
        this.foundTopics.push(topics[i]);
      }
    }
  }

  viewTopic() {

  }
}
