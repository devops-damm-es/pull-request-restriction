import { IGitPullRequestBusinessRuleDomainService } from "../IGitPullRequestBusinessRuleDomainService";

export class GitPullRequestBusinessRuleDomainService implements IGitPullRequestBusinessRuleDomainService {
    isAllowedGitPullRequest(sourceBranchName: String, targetBranchName: String, defaultBranchName: String): Boolean {
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
            if (sourceRegex.test(sourceBranchName as string) && targetRegex.test(targetBranchName as string)) {
                return true;
            }
        }
        return false;
    }
}