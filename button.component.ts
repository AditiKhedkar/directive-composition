import { Component } from '@angular/core';
import { EnhancedButtonDirective } from '../directives/enhanced-button.directive';

@Component({
  standalone: true,
  selector: 'app-button',
  template: \`<button appEnhancedButton [appTooltip]="'Click me for magic 🎯'">Hover Me</button>\`,
  imports: [EnhancedButtonDirective],
})
export class ButtonComponent {}