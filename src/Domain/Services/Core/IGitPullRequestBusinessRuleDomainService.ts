export abstract class IGitPullRequestBusinessRuleDomainService {
    abstract isAllowedGitPullRequest(sourceBranchName: String, targetBranchName: String, defaultBranchName: String): Boolean;
}