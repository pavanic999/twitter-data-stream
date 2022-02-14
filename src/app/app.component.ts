import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

export interface HashTag {
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Twitter Data Stream';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  avgNumberOfTweet = 245;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  hashTags: HashTag[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.hashTags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(hashTag: HashTag): void {
    const index = this.hashTags.indexOf(hashTag);

    if (index >= 0) {
      this.hashTags.splice(index, 1);
    }
  }

}
