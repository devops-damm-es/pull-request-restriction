"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBranchComparisonBusinessRuleDomainService = void 0;
class GitBranchComparisonBusinessRuleDomainService {
    isAllowedGitBranchComparison(gitBranchComparison, defaultBranchName) {
        var releaseRegex = new RegExp('^release\/.*');
        var developRegex = new RegExp('^develop$');
        var defaultBranchNameRegex = new RegExp('^' + defaultBranchName + '$');
        if (releaseRegex.test(gitBranchComparison.sourceBranchName)
            && developRegex.test(gitBranchComparison.targetBranchName)) {
            return gitBranchComparison.numberOfCommitsAhead == 0;
        }
        else if (developRegex.test(gitBranchComparison.sourceBranchName)
            && defaultBranchNameRegex.test(gitBranchComparison.targetBranchName)) {
            return true;
        }
        else {
            return gitBranchComparison.numberOfCommitsBehind == 0;
        }
    }
}
exports.GitBranchComparisonBusinessRuleDomainService = GitBranchComparisonBusinessRuleDomainService;
//# sourceMappingURL=GitBranchComparisonBusinessRuleDomainService.js.map