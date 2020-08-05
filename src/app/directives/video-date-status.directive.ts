import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appVideoDateStatus]'
})
export class VideoDateStatusDirective implements OnChanges {
  @Input('appVideoDateStatus') private value: string;
  private todayDate: number = Date.now();
  private msInDay: number = 86400000;
  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  public ngOnChanges(): void {
    const date: number = new Date(this.value).getTime();
    const diff: number = this.todayDate - date;
    if (diff < this.msInDay * 7) {
      this.renderer2.setStyle(this.el.nativeElement, 'border-bottom-color', '#0066cc');
    } else if (diff > this.msInDay * 7 && diff <= this.msInDay * 30 ) {
      this.renderer2.setStyle(this.el.nativeElement, 'border-bottom-color', '#009933');
    } else {
    this.renderer2.setStyle(this.el.nativeElement, 'border-bottom-color', '#ff0000');
    }
  }
}
