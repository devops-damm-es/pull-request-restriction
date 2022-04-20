export abstract class IGitReleaseBranchBusinessRuleDomainService {
    abstract isGitReleaseSourceBranch(sourceBranchName: String): Boolean;
    abstract getGitReleasePreviousTargetBranch(): String;
}