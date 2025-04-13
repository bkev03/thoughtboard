import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ReadableDatePipe } from '../../shared/pipes/date.pipe';
import { PollService } from '../../shared/services/poll.service';
import { Poll } from '../../shared/models/Poll';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-polls',
  imports: [
    MatIconModule,
    MatCard,
    MatCardModule,
    MatProgressBarModule,
    MatProgressBar,
    ReadableDatePipe
],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.scss',
  standalone: true
})
export class PollsComponent implements OnInit {
  allPolls: Poll[] = [];

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.allPolls = this.pollService.getAllPolls();
  }

}
