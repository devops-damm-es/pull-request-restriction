import { GitAuthentication } from "../../Domain/Entities/GitAuthentication";
import { GitBranchComparison } from "../../Domain/Entities/GitBranchComparison";
import { GitRepository } from "../../Domain/Entities/GitRepository";

export abstract class IGitBranchApplicationService {
    abstract getGitBranchComparison(
        sourceBranchName: String,
        targetBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<GitBranchComparison | null>;
}