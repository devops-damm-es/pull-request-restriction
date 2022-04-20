import { GitBranchComparison } from "../../Entities/GitBranchComparison";

export abstract class IGitBranchComparisonBusinessRuleDomainService {
    abstract isAllowedGitBranchComparison(gitBranchComparison: GitBranchComparison, defaultBranchName: String): Boolean;
}