import { Inject } from "typescript-ioc";
import { GitAuthentication } from "../../../Domain/Entities/GitAuthentication";
import { GitBranchComparison } from "../../../Domain/Entities/GitBranchComparison";
import { GitRepository } from "../../../Domain/Entities/GitRepository";
import { IGitBranchDomainService } from "../../../Domain/Services/Core/IGitBranchDomainService";
import { IGitBranchApplicationService } from "../IGitBranchApplicationService";

export class GitBranchApplicationService implements IGitBranchApplicationService {

    private gitBranchDomainService: IGitBranchDomainService;

    constructor(@Inject gitBranchDomainService: IGitBranchDomainService) {
        this.gitBranchDomainService = gitBranchDomainService;
    }

    async getGitBranchComparison(
        sourceBranchName: String,
        targetBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<GitBranchComparison | null> {
        return this.gitBranchDomainService.getRepositoryService().getGitBranchComparison(
            sourceBranchName,
            targetBranchName,
            gitRepository,
            gitAuthentication);
    }
}