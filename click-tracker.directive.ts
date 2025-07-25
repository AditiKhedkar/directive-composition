import { Directive, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appClickTracker]',
})
export class ClickTrackerDirective {
  @HostListener('click')
  handleClick() {
    console.log('Button clicked at', new Date().toISOString());
  }
}