import * as github from '@actions/github';
import { GitAuthentication } from '../../../../Domain/Entities/GitAuthentication';
import { GitBranchComparison } from '../../../../Domain/Entities/GitBranchComparison';
import { GitRepository } from '../../../../Domain/Entities/GitRepository';
import { IGitBranchWrapperRepositoryService } from '../IGitBranchWrapperRepositoryService';

export class GitBranchWrapperRepositoryService implements IGitBranchWrapperRepositoryService {
    async getGitBranchComparison(
        sourceBranchName: String,
        targetBranchName: String,
        gitRepository: GitRepository,
        gitAuthentication: GitAuthentication): Promise<GitBranchComparison | null> {
        return new Promise<GitBranchComparison | null>(function (resolve, reject) {
            try {
                const client = github.getOctokit(gitAuthentication.token as string);
                client.repos.compareCommits({
                    owner: gitRepository.owner as string,
                    repo: gitRepository.name as string,
                    base: targetBranchName as string,
                    head: sourceBranchName as string
                })
                    .then(response => {
                        var gitBranchComparison = new GitBranchComparison(
                            sourceBranchName,
                            targetBranchName,
                            response.data.ahead_by,
                            response.data.behind_by);
                        resolve(gitBranchComparison);
                    })
                    .catch(_ => { reject(null); })
            } catch {
                reject(false);
            }
        });
    }
}