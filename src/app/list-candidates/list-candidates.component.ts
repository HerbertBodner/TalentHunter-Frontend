import { Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate';
import { AssessmentCategory } from '../models/assessment-category.enum';
import { CandidatesServiceClient, CandidateDto } from '../shared/service-clients/service-client.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.css']
})
export class ListCandidatesComponent implements OnInit {

  candidates: CandidateDto[];
  constructor(private _candidatesServiceClient: CandidatesServiceClient) { }

  ngOnInit() {
    this._candidatesServiceClient.get()
      .subscribe((result: CandidateDto[]) => {
        this.candidates = result;
      });
  }

}
