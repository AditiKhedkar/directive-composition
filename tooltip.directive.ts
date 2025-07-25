import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText = '';

  private tooltipEl?: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  showTooltip() {
    this.tooltipEl = this.renderer.createElement('span');
    this.tooltipEl.textContent = this.tooltipText;
    this.renderer.setStyle(this.tooltipEl, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipEl, 'background', '#333');
    this.renderer.setStyle(this.tooltipEl, 'color', '#fff');
    this.renderer.setStyle(this.tooltipEl, 'padding', '4px 8px');
    this.renderer.setStyle(this.tooltipEl, 'top', '100%');
    this.renderer.setStyle(this.tooltipEl, 'left', '0');
    this.renderer.appendChild(this.el.nativeElement, this.tooltipEl);
  }

  @HostListener('mouseleave')
  hideTooltip() {
    if (this.tooltipEl) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltipEl);
      this.tooltipEl = undefined;
    }
  }
}