"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitSourceBranchNameWrapperRepositoryService = void 0;
const github = require("@actions/github");
class GitSourceBranchNameWrapperRepositoryService {
    getGitSourceBranchName() {
        try {
            const sourceBranchName = github.context.payload.pull_request.head.ref;
            if (sourceBranchName != null && sourceBranchName.length > 0) {
                return sourceBranchName;
            }
            else {
                return null;
            }
        }
        catch (_a) {
            return null;
        }
    }
}
exports.GitSourceBranchNameWrapperRepositoryService = GitSourceBranchNameWrapperRepositoryService;
//# sourceMappingURL=GitSourceBranchNameWrapperRepositoryService.js.map