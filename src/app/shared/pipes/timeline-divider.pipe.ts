import { Pipe, PipeTransform } from '@angular/core';
import { TimelineEvent } from 'src/app/individuals/models/timeline-events.model';

@Pipe({
  name: 'timelineDivider'
})
export class TimelineDividerPipe implements PipeTransform {


  transform(value: Array<TimelineEvent>, sectionId: number): Array<TimelineEvent> {
    return value.filter(data => data.sectionId == sectionId);
  }

}
