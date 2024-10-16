import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appShowContext]'
})
export class ShowContextDirective {

  @Input() set appShowContext(context: string) {
    if (context === environment.projectName) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
    }
  }


  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }
}
