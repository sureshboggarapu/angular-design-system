import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class AppTextFieldComponent {
  @Input() ariaLabel: string;
  @Input() title: string;
  @Input() id: string;
  @Input() defaultValue: string;
  @Input() inputClass: string;
  @Input() inputType = 'text';
  @Input() labelClass: string;
  @Input() hint: string;
  @Input() hintClass: string;
  @Input() errorMessage: string;
  @Input() dataAutoId: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() multiline = false;
  @Output() userInput = new EventEmitter<any>();

  constructor() {}

  callBackFunction(e) {
    this.userInput.emit(e);
  }
}
