import { Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate';
import { AssessmentCategory } from '../models/assessment-category.enum';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.css']
})
export class ListCandidatesComponent implements OnInit {

  candidates: Candidate[];
  constructor() { }

  ngOnInit() {
    this.candidates = [
      {Id: 1, FirstName: "Max", LastName: "Mustermann", Birthday: new Date(1974, 1,23), Assessment: AssessmentCategory.Adequate, 
        Attachments: [{FileName: "CV.pdf", Path:"localhost:4200/cv1.pdf"}]},
      {Id: 2, FirstName: "John", LastName: "Doe", Birthday: new Date(1992, 12,3), Assessment: AssessmentCategory.VeryGood, 
        Attachments: [{FileName: "Lebenslauf.pdf", Path:"localhost:4200/cv2.pdf"},
        {FileName: "Certificate.pdf", Path:"localhost:4200/certificate2.pdf"}]}
    ];
  }

}
