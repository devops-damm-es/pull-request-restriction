import { Inject } from "typescript-ioc";
import { GitAuthentication } from "../../Domain/Entities/GitAuthentication";
import { GitRepository } from "../../Domain/Entities/GitRepository";
import { IGitBranchComparisonBusinessRuleDomainService } from "../../Domain/Services/Core/IGitBranchComparisonBusinessRuleDomainService";
import { IGitEventBusinessRuleDomainService } from "../../Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IGitPullRequestBusinessRuleDomainService } from "../../Domain/Services/Core/IGitPullRequestBusinessRuleDomainService";
import { IGitPullRequestEventBusinessRuleDomainService } from "../../Domain/Services/Core/IGitPullRequestEventBusinessRuleDomainService";
import { IGitReleaseBranchBusinessRuleDomainService } from "../../Domain/Services/Core/IGitReleaseBranchBusinessRuleDomainService";
import { IActionResultApplicationService } from "../Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../Core/IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../Core/IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../Core/IGitEventApplicationService";
import { IGitPullRequestEventApplicationService } from "../Core/IGitPullRequestEventApplicationService";
import { IGitRepositoryApplicationService } from "../Core/IGitRepositoryApplicationService";
import { IGitSourceBranchNameApplicationService } from "../Core/IGitSourceBranchNameApplicationService";
import { IGitTargetBranchNameApplicationService } from "../Core/IGitTargetBranchNameApplicationService";
import { IMainApplicationService } from "../IMainApplicationService";

export class MainApplicationService implements IMainApplicationService {

    private gitEventApplicationService: IGitEventApplicationService;
    private gitEventBusinessRuleDomainService: IGitEventBusinessRuleDomainService;
    private gitPullRequestEventApplicationService: IGitPullRequestEventApplicationService;
    private gitPullRequestEventBusinessRuleDomainService: IGitPullRequestEventBusinessRuleDomainService;
    private gitDefaultBranchNameApplicationService: IGitDefaultBranchNameApplicationService;
    private gitSourceBranchNameApplicationService: IGitSourceBranchNameApplicationService;
    private gitTargetBranchNameApplicationService: IGitTargetBranchNameApplicationService;
    private gitPullRequestBusinessRuleDomainService: IGitPullRequestBusinessRuleDomainService;
    private gitAuthenticationApplicationService: IGitAuthenticationApplicationService;
    private gitRepositoryApplicationService: IGitRepositoryApplicationService;
    private gitReleaseBranchBusinessRuleDomainService: IGitReleaseBranchBusinessRuleDomainService;
    private gitBranchApplicationService: IGitBranchApplicationService;
    private gitBranchComparisonBusinessRuleDomainService: IGitBranchComparisonBusinessRuleDomainService;
    private actionResultApplicationService: IActionResultApplicationService;

    constructor(
        @Inject gitEventApplicationService: IGitEventApplicationService,
        @Inject gitEventBusinessRuleDomainService: IGitEventBusinessRuleDomainService,
        @Inject gitPullRequestEventApplicationService: IGitPullRequestEventApplicationService,
        @Inject gitPullRequestEventBusinessRuleDomainService: IGitPullRequestEventBusinessRuleDomainService,
        @Inject gitDefaultBranchNameApplicationService: IGitDefaultBranchNameApplicationService,
        @Inject gitSourceBranchNameApplicationService: IGitSourceBranchNameApplicationService,
        @Inject gitTargetBranchNameApplicationService: IGitTargetBranchNameApplicationService,
        @Inject gitPullRequestBusinessRuleDomainService: IGitPullRequestBusinessRuleDomainService,
        @Inject gitAuthenticationApplicationService: IGitAuthenticationApplicationService,
        @Inject gitRepositoryApplicationService: IGitRepositoryApplicationService,
        @Inject gitReleaseBranchBusinessRuleDomainService: IGitReleaseBranchBusinessRuleDomainService,
        @Inject gitBranchApplicationService: IGitBranchApplicationService,
        @Inject gitBranchComparisonBusinessRuleDomainService: IGitBranchComparisonBusinessRuleDomainService,
        @Inject actionResultApplicationService: IActionResultApplicationService) {
        this.gitEventApplicationService = gitEventApplicationService;
        this.gitEventBusinessRuleDomainService = gitEventBusinessRuleDomainService;
        this.gitPullRequestEventApplicationService = gitPullRequestEventApplicationService;
        this.gitPullRequestEventBusinessRuleDomainService = gitPullRequestEventBusinessRuleDomainService;
        this.gitDefaultBranchNameApplicationService = gitDefaultBranchNameApplicationService;
        this.gitSourceBranchNameApplicationService = gitSourceBranchNameApplicationService;
        this.gitTargetBranchNameApplicationService = gitTargetBranchNameApplicationService;
        this.gitPullRequestBusinessRuleDomainService = gitPullRequestBusinessRuleDomainService;
        this.gitAuthenticationApplicationService = gitAuthenticationApplicationService;
        this.gitRepositoryApplicationService = gitRepositoryApplicationService;
        this.gitReleaseBranchBusinessRuleDomainService = gitReleaseBranchBusinessRuleDomainService;
        this.gitBranchApplicationService = gitBranchApplicationService;
        this.gitBranchComparisonBusinessRuleDomainService = gitBranchComparisonBusinessRuleDomainService;
        this.actionResultApplicationService = actionResultApplicationService;
    }

    async start() {
        var gitEventType = this.gitEventApplicationService.getGitEventType();

        if (this.gitEventBusinessRuleDomainService.isAllowedGitEventType(gitEventType)) {
            var gitPullRequestEventType = this.gitPullRequestEventApplicationService.getGitPullRequestEventType();

            if (this.gitPullRequestEventBusinessRuleDomainService.isAllowedGitPullRequestEventType(gitPullRequestEventType)) {
                var gitDefaultBranchName = this.gitDefaultBranchNameApplicationService.getGitDefaultBranchName();
                var gitSourceBranchName = this.gitSourceBranchNameApplicationService.getGitSourceBranchName();
                var gitTargetBranchName = this.gitTargetBranchNameApplicationService.getGitTargetBranchName();

                if (this.gitPullRequestBusinessRuleDomainService.isAllowedGitPullRequest(gitSourceBranchName, gitTargetBranchName, gitDefaultBranchName)) {
                    var gitAuthentication = this.gitAuthenticationApplicationService.getGitAuthentication();
                    var gitRepository = this.gitRepositoryApplicationService.getGitRepository();

                    if (this.gitReleaseBranchBusinessRuleDomainService.isGitReleaseSourceBranch(gitSourceBranchName)) {
                        var gitReleasePreviousTargetBranch = this.gitReleaseBranchBusinessRuleDomainService.getGitReleasePreviousTargetBranch();
                        this.gitBranchApplicationService.getGitBranchComparison(gitSourceBranchName, gitReleasePreviousTargetBranch, gitRepository, gitAuthentication)
                            .then(gitPreviousBranchComparison => {

                                if (this.gitBranchComparisonBusinessRuleDomainService.isAllowedGitBranchComparison(gitPreviousBranchComparison, gitDefaultBranchName)) {
                                    this._isAllowedSourceTargetGitBranchComparison(gitSourceBranchName, gitTargetBranchName, gitRepository, gitAuthentication, gitDefaultBranchName);
                                } else {
                                    this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Release branch has commits that not in develop branch");
                                }
                            })
                            .catch(_ => {
                                this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Error when obtain git comparison between release and develop branches");
                            })
                    } else {
                        this._isAllowedSourceTargetGitBranchComparison(gitSourceBranchName, gitTargetBranchName, gitRepository, gitAuthentication, gitDefaultBranchName);
                    }
                } else {
                    this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Git pull request between source and target branches is not allowed");
                }
            } else {
                this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Git pull request event type is not allowed");
            }
        } else {
            this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Git event type is not allowed");
        }
    }

    private async _isAllowedSourceTargetGitBranchComparison(
        gitSourceBranchName: String,
        gitTargetBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication,
        gitDefaultBranchName: String) {

        this.gitBranchApplicationService.getGitBranchComparison(gitSourceBranchName, gitTargetBranchName, gitRepository, gitAuthentication)
            .then(gitBranchComparison => {
                if (this.gitBranchComparisonBusinessRuleDomainService.isAllowedGitBranchComparison(gitBranchComparison, gitDefaultBranchName)) {
                    this.actionResultApplicationService.setActionResult(true, "Pull request is allowed");
                }
                else {
                    this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Source branch has commits behind target branch");
                }
            })
            .catch(_ => {
                this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Error when obtain git comparison between source and target branches");
            });
    }
}