import { PositionAssessmentStatistic } from "./position-assessment-statistic";

export interface DashboardPosition {
    Name: string;
    AmountApplied: number;
    AmountRejected: number;
    AmountForReview: number;
    AssessmentStatistics: PositionAssessmentStatistic[];
}
