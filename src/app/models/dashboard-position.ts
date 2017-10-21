import { PositionAssessmentStatistic } from "./position-assessment-statistic";

export interface DashboardPosition {
    Id: Number;
    Name: string;
    AmountApplied: number;
    AmountRejected: number;
    AmountForReview: number;
    AssessmentStatistics: PositionAssessmentStatistic[];
}
