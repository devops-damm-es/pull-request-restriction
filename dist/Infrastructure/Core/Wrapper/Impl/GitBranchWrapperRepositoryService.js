"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBranchWrapperRepositoryService = void 0;
const github = require("@actions/github");
const GitBranchComparison_1 = require("../../../../Domain/Entities/GitBranchComparison");
class GitBranchWrapperRepositoryService {
    getGitBranchComparison(sourceBranchName, targetBranchName, gitRepository, gitAuthentication) {
        return new Promise(function (resolve, reject) {
            try {
                const client = github.getOctokit(gitAuthentication.token);
                client.repos.compareCommits({
                    owner: gitRepository.owner,
                    repo: gitRepository.name,
                    base: targetBranchName,
                    head: sourceBranchName
                })
                    .then(response => {
                    var gitBranchComparison = new GitBranchComparison_1.GitBranchComparison(sourceBranchName, targetBranchName, response.data.ahead_by, response.data.behind_by);
                    resolve(gitBranchComparison);
                })
                    .catch(_ => { reject(null); });
            }
            catch (_a) {
                reject(false);
            }
        });
    }
}
exports.GitBranchWrapperRepositoryService = GitBranchWrapperRepositoryService;
//# sourceMappingURL=GitBranchWrapperRepositoryService.js.map