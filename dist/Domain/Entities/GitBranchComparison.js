"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBranchComparison = void 0;
class GitBranchComparison {
    constructor(sourceBranchName, targetBranchName, numberOfCommitsAhead, numberOfCommitsBehind) {
        this.sourceBranchName = sourceBranchName;
        this.targetBranchName = targetBranchName;
        this.numberOfCommitsAhead = numberOfCommitsAhead;
        this.numberOfCommitsBehind = numberOfCommitsBehind;
    }
}
exports.GitBranchComparison = GitBranchComparison;
//# sourceMappingURL=GitBranchComparison.js.map