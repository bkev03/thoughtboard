import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';

import { Topic } from '../../shared/models/Topic';
import { TopicService } from '../../shared/services/topic.service';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ReadableDatePipe } from '../../shared/pipes/date.pipe';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Observable, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  imports: [
    CommonModule,
    MatButtonModule,
    MatButton,
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
  allTopics: Topic[] | null = null;
  displayedColumns: string[] = ['name', 'createdBy', 'createdAt', 'actions']
  show: 'show' | 'hide' = 'show';

  constructor(
    private topicService: TopicService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.topicService.getAllTopics().pipe(take(1)).subscribe(topics => {
      this.allTopics = topics;
    });
  }

  viewTopic(topic: any) {
    let t = topic as Topic;
    let id = t.id;
    this.router.navigate(['/current-topic', id]);
  }

}
