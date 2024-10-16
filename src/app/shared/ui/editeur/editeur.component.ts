import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import 'ckeditor5-build-classic-plus/build/translations/fr';
import ClassicEditor from 'ckeditor5-build-classic-plus';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.scss'],
})
export class EditeurComponent implements OnInit, OnDestroy {
  @Input() source;
  @Input() readonly;
  @Input() menu;
  @Input('dataSubs') dataEventListener: Subject<any>;
  @Output() onSave = new EventEmitter<any>();

  private dataSubscription: Subscription;

  public Editor = ClassicEditor;
  public config = {
    language: 'fr',
    removePlugins: ['MediaEmbed', 'ImageUpload'],
    toolbar: [
      'undo',
      'redo',
      '|',
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      '|',
      'link',
      'insertTable',
      '|',
      'bulletedList',
      'numberedList',
      'outdent',
      'indent',
    ],
  };

  text = '';

  constructor() { }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  ngOnInit() {
    this.dataSubscription = this.dataEventListener.subscribe((e) => {
      this.text = e;
    });
  }

  show() {
    this.onSave.emit(this.text);
  }

  editorsReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
  }
}
