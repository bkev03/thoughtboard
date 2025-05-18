import { Component, Input, OnInit } from '@angular/core';
import { Topic } from '../../shared/models/Topic';
import { TopicService } from '../../shared/services/topic.service';
import { ReadableDatePipe } from '../../shared/pipes/date.pipe';
import { FormsModule } from '@angular/forms';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Comment } from '../../shared/models/Comment';

@Component({
  selector: 'app-current-topic',
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
  templateUrl: './current-topic.component.html',
  styleUrl: './current-topic.component.scss'
})
export class CurrentTopicComponent implements OnInit {
  topicId?: string;
  currentTopic?: Topic | null = null;
  comments: Comment[] | null = null;

  constructor(
    private topicService: TopicService
  ) {}

  async ngOnInit(): Promise<void> {
    this.currentTopic = await this.topicService.getTopicById(this.topicId!);
    this.comments = await this.topicService.getCommentsByTopicId(this.topicId!);
  }

  @Input()
  set id(id: string) {
    this.topicId = id;
  }
}
