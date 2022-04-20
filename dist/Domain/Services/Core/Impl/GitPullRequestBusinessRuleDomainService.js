"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPullRequestBusinessRuleDomainService = void 0;
class GitPullRequestBusinessRuleDomainService {
    isAllowedGitPullRequest(sourceBranchName, targetBranchName, defaultBranchName) {
        var allowedPullRequestList = [];
        allowedPullRequestList.push({
            sourceRegex: '^feature\/.*',
            targetRegex: '^develop$'
        });
        allowedPullRequestList.push({
            sourceRegex: '(^develop$)|(^release\/.*)|(^hotfix\/.*)',
            targetRegex: '^' + defaultBranchName + '$'
        });
        for (var index in allowedPullRequestList) {
            var sourceRegex = new RegExp(allowedPullRequestList[index].sourceRegex);
            var targetRegex = new RegExp(allowedPullRequestList[index].targetRegex);
            if (sourceRegex.test(sourceBranchName) && targetRegex.test(targetBranchName)) {
                return true;
            }
        }
        return false;
    }
}
exports.GitPullRequestBusinessRuleDomainService = GitPullRequestBusinessRuleDomainService;
//# sourceMappingURL=GitPullRequestBusinessRuleDomainService.js.map