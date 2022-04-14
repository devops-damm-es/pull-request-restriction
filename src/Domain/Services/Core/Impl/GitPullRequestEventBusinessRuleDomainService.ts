import { GitPullRequestEventTypeEnum } from "../../../Enums/GitPullRequestEventTypeEnum";
import { IGitPullRequestEventBusinessRuleDomainService } from "../IGitPullRequestEventBusinessRuleDomainService";

export class GitPullRequestEventBusinessRuleDomainService implements IGitPullRequestEventBusinessRuleDomainService {
    isAllowedGitPullRequestEventType(gitPullRequestEventType: GitPullRequestEventTypeEnum): Boolean {
        return gitPullRequestEventType == GitPullRequestEventTypeEnum.Opened
            || gitPullRequestEventType == GitPullRequestEventTypeEnum.Edited
            || gitPullRequestEventType == GitPullRequestEventTypeEnum.Reopened
            || gitPullRequestEventType == GitPullRequestEventTypeEnum.Synchronize;
    }
}