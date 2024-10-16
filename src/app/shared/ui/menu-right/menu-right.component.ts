import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuRightComponent implements OnInit {
  constructor(private detectChange: ChangeDetectorRef) {}

  showTitle = false;
  @Input() menus: Menu[] = [];
  @Output() openModalEvent = new EventEmitter<void>();
  ngOnInit(): void {}

  openModal(menu) {
    this.openModalEvent.emit(menu);
  }

  onShowTitle() {
    this.showTitle = true;
  }

  onHideTitle() {
    this.showTitle = false;
  }
}

export interface Menu {
  title: string;
  icone: string;
  show: boolean;
  component: string;
}
