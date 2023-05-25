import { Component } from '@angular/core';

import { TOPICS } from '../topic/topics'

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {
  topics = TOPICS;
}
