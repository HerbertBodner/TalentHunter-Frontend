import { AssessmentCategory } from "./assessment-category.enum";
import { Attachement } from "./attachement";

export interface Candidate {
    Id: number;
    FirstName: string;
    LastName: string;
    Birthday: Date;
    Assessment: AssessmentCategory;
    Attachments: Attachement[];
}
