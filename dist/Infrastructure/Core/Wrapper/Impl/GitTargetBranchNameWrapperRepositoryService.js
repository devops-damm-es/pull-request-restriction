"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitTargetBranchNameWrapperRepositoryService = void 0;
const github = require("@actions/github");
class GitTargetBranchNameWrapperRepositoryService {
    getGitTargetBranchName() {
        try {
            const targetBranchName = github.context.payload.pull_request.base.ref;
            if (targetBranchName != null && targetBranchName.length > 0) {
                return targetBranchName;
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
exports.GitTargetBranchNameWrapperRepositoryService = GitTargetBranchNameWrapperRepositoryService;
//# sourceMappingURL=GitTargetBranchNameWrapperRepositoryService.js.map