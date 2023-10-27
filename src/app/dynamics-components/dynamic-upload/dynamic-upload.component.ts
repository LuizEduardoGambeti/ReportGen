import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-upload',
  templateUrl: './dynamic-upload.component.html'
})
export class DynamicUploadComponent {
  @Input() uploadUrl!: string;
  fileList = [];
}
