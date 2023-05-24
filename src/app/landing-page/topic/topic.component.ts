import { Component } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {

  longText: string = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos 
  veritatis eius, ipsa molestias nesciunt ipsam reiciendis necessitatibus 
  soluta cumque excepturi temporibus ab, 
  quisquam cupiditate alias a, odit possimus nostrum beatae.`;
  topics = new Array(3);
}
