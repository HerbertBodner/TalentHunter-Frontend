import { AssessmentCategory } from "./assessment-category.enum";
import { Attachement } from "./attachement";

export interface Candidate {
    FirstName: string;
    LastName: string;
    Birthday: Date;
    Assessment: AssessmentCategory;
    Attachments: Attachement[];
}
