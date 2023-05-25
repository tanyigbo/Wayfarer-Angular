import { Component, OnInit } from '@angular/core';

import { TOPICS } from '../topic/topics'

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  // declare and initalize public members
  topicCnt = new Array(3);
  topics: string[] = [];
  titles: string[] = [];;
 
  // method will obtain and set trending topic titles
  getTitles() : any {
    TOPICS.map(topic => {
      this.titles.push(topic.title);
    });
  }
  // method will obtain and set trending topics
  getTopics() : any {
    TOPICS.map(topic => {
      this.topics.push(topic.topic);
    });
  }

  ngOnInit(): void {
    // call method to display trending travel info
    this.getTitles();
    this.getTopics();
  }

}
