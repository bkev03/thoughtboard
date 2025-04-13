import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { Topic } from '../../shared/models/Topic';
import { TopicService } from '../../shared/services/topic.service';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ReadableDatePipe } from '../../shared/pipes/date.pipe';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-topics',
  imports: [
    MatIcon,
    MatIconModule,
    MatButtonModule,
    MatCard,
    MatCardModule,
    MatTable,
    MatTableModule,
    FormsModule,
    ReadableDatePipe
  ],
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.scss',
  standalone: true
})
export class TopicsComponent implements OnInit {
  allTopics: Topic[] = [];
  displayedColumns: string[] = ['id', 'name', 'createdBy', 'createdAt', 'actions']

  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.allTopics = this.topicService.getAllTopics();
  }

  viewTopic() {

  }

}
