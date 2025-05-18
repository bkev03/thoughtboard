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

import { ReadableDatePipe } from '../../shared/pipes/date.pipe';
import { take } from 'rxjs';
import { Router } from '@angular/router';

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
    MatButtonModule,
    ReadableDatePipe
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: true
})
export class SearchComponent {
  searchText: string = '';
  foundTopics: Topic[] = [];
  allTopics: Topic[] = [];
  displayedColumns: string[] = ['name', 'createdBy', 'createdAt', 'actions']

  constructor(
    private topicService: TopicService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.topicService.getAllTopics().pipe(take(1)).subscribe(topics => {
      this.allTopics = topics;
    });
  }

  onSearchFilterChange(searchText: string): void {
    this.foundTopics = []; 
    console.log(this.allTopics);
    if (searchText.length === 0) {
      return;
    }

    for (let i = 0; i < this.allTopics.length; i++) {
      if (this.allTopics[i].name.toLowerCase().includes(searchText)) {
        this.foundTopics.push(this.allTopics[i]);
      }
    }
  }

  viewTopic(topic: any) {
    let t = topic as Topic;
    let id = t.id;
    this.router.navigate(['/current-topic', id]);
  }
}
