import { Inject } from "typescript-ioc";
import { GitAuthentication } from "../../../Domain/Entities/GitAuthentication";
import { GitBranchComparison } from "../../../Domain/Entities/GitBranchComparison";
import { GitRepository } from "../../../Domain/Entities/GitRepository";
import { IGitBranchRepositoryService } from "../IGitBranchRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../Wrapper/IGitBranchWrapperRepositoryService";

export class GitBranchRepositoryService implements IGitBranchRepositoryService {

    private gitBranchWrapperRepositoryService: IGitBranchWrapperRepositoryService;

    constructor(@Inject gitBranchWrapperRepositoryService: IGitBranchWrapperRepositoryService) {
        this.gitBranchWrapperRepositoryService = gitBranchWrapperRepositoryService;
    }

    async getGitBranchComparison(
        sourceBranchName: String,
        targetBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<GitBranchComparison | null> {
        return this.gitBranchWrapperRepositoryService.getGitBranchComparison(
            sourceBranchName,
            targetBranchName,
            gitRepository,
            gitAuthentication);
    }
}