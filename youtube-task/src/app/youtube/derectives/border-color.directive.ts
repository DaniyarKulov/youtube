import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

enum ColorsDatesMs {
  sixMonth = 15778462980,
  month = 2629743830,
  week = 604800000,
  blue = 'blue',
  green = 'green',
  red = 'red',
  yellow = 'yellow',
}

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnChanges {
  @Input('appBorderColor') public date!: string | null;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  public ngOnChanges(): void {
    if (this.date) {
      const date = new Date(this.date).getTime();
      const curDate = Date.now();
      const color = this.getColor(curDate, date);
      this.setColor(color);
    }
  }

  private setColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', color);
  }

  private getColor(curDate: number, date: number): string {
    const dateDifference = curDate - date;
    if (dateDifference <= ColorsDatesMs.week) {
      return ColorsDatesMs.blue;
    }
    if (dateDifference < ColorsDatesMs.month) {
      return ColorsDatesMs.green;
    }
    if (dateDifference < ColorsDatesMs.sixMonth) {
      return ColorsDatesMs.yellow;
    }
    return ColorsDatesMs.red;
  }
}
