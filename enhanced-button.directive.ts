import { Directive } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';
import { ClickTrackerDirective } from './click-tracker.directive';

@Directive({
  standalone: true,
  selector: '[appEnhancedButton]',
  hostDirectives: [
    ClickTrackerDirective,
    {
      directive: TooltipDirective,
      inputs: ['appTooltip'],
    },
  ],
})
export class EnhancedButtonDirective {}