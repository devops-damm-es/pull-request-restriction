"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitReleaseBranchBusinessRuleDomainService = void 0;
class GitReleaseBranchBusinessRuleDomainService {
    isGitReleaseSourceBranch(sourceBranchName) {
        var releaseRegex = new RegExp('^release\/.*');
        return releaseRegex.test(sourceBranchName);
    }
    getGitReleasePreviousTargetBranch() {
        return "develop";
    }
}
exports.GitReleaseBranchBusinessRuleDomainService = GitReleaseBranchBusinessRuleDomainService;
//# sourceMappingURL=GitReleaseBranchBusinessRuleDomainService.js.map