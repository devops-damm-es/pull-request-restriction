import { GitBranchComparison } from "../../../Entities/GitBranchComparison";
import { IGitBranchComparisonBusinessRuleDomainService } from "../IGitBranchComparisonBusinessRuleDomainService";

export class GitBranchComparisonBusinessRuleDomainService implements IGitBranchComparisonBusinessRuleDomainService {
    isAllowedGitBranchComparison(gitBranchComparison: GitBranchComparison, defaultBranchName: String): Boolean {
        var releaseRegex = new RegExp('^release\/.*');
        var developRegex = new RegExp('^develop$');
        var defaultBranchNameRegex = new RegExp('^' + defaultBranchName + '$');

        if (releaseRegex.test(gitBranchComparison.sourceBranchName as string)
            && developRegex.test(gitBranchComparison.targetBranchName as string)) {
            return gitBranchComparison.numberOfCommitsAhead == 0;

        } else if ((developRegex.test(gitBranchComparison.sourceBranchName as string)
            || releaseRegex.test(gitBranchComparison.sourceBranchName as string))
            && defaultBranchNameRegex.test(gitBranchComparison.targetBranchName as string)) {
            return true;

        } else {
            return gitBranchComparison.numberOfCommitsBehind == 0;
        }
    }
}