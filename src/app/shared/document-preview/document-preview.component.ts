import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'th-document-preview',
  templateUrl: './document-preview.component.html',
  styleUrls: ['./document-preview.component.css']
})
export class DocumentPreviewComponent implements OnInit {

  defaultImage = '/assets/_empty_white_page.png';

  @Input()
  Image = '/assets/CV_Max_Mustermann.png';

  @Input()
  FileName = "Image"

  @Input()
  Path = "Image.pdf"

  offset = 100;

  constructor() { }

  ngOnInit() {
  }

}
