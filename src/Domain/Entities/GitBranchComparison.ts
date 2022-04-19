export class GitBranchComparison {
    sourceBranchName: String;
    targetBranchName: String;
    numberOfCommitsAhead: Number;
    numberOfCommitsBehind: Number;

    constructor(
        sourceBranchName: String,
        targetBranchName: String,
        numberOfCommitsAhead: Number,
        numberOfCommitsBehind: Number) {
        this.sourceBranchName = sourceBranchName;
        this.targetBranchName = targetBranchName;
        this.numberOfCommitsAhead = numberOfCommitsAhead;
        this.numberOfCommitsBehind = numberOfCommitsBehind;
    }
}