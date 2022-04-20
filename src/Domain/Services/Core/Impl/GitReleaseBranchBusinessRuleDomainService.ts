import { IGitReleaseBranchBusinessRuleDomainService } from "../IGitReleaseBranchBusinessRuleDomainService";

export class GitReleaseBranchBusinessRuleDomainService implements IGitReleaseBranchBusinessRuleDomainService {
    isGitReleaseSourceBranch(sourceBranchName: String): Boolean {
        var releaseRegex = new RegExp('^release\/.*');
        return releaseRegex.test(sourceBranchName as string);
    }

    getGitReleasePreviousTargetBranch(): String {
        return "develop";
    }
}