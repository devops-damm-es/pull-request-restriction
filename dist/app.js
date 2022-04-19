"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IGitAuthenticationApplicationService_1 = require("./Application/Core/IGitAuthenticationApplicationService");
const IGitBranchApplicationService_1 = require("./Application/Core/IGitBranchApplicationService");
const IGitRepositoryApplicationService_1 = require("./Application/Core/IGitRepositoryApplicationService");
const Container_1 = require("./Crosscutting/Container");
const GitPullRequestEventTypeEnum_1 = require("./Domain/Enums/GitPullRequestEventTypeEnum");
const IGitPullRequestEventWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitPullRequestEventWrapperRepositoryService");
const IGitSourceBranchNameWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitSourceBranchNameWrapperRepositoryService");
const IGitTargetBranchNameWrapperRepositoryService_1 = require("./Infrastructure/Core/Wrapper/IGitTargetBranchNameWrapperRepositoryService");
var gitSourceBranchNameWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitSourceBranchNameWrapperRepositoryService_1.IGitSourceBranchNameWrapperRepositoryService);
var gitSourceBranchName = gitSourceBranchNameWrapperRepositoryService.getGitSourceBranchName();
if (gitSourceBranchName != null) {
    console.log("Source Branch: " + gitSourceBranchName);
}
else {
    console.log("Source Branch is NULL");
}
var gitTargetBranchNameWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitTargetBranchNameWrapperRepositoryService_1.IGitTargetBranchNameWrapperRepositoryService);
var gitTargetBranchName = gitTargetBranchNameWrapperRepositoryService.getGitTargetBranchName();
if (gitTargetBranchName != null) {
    console.log("Target Branch: " + gitTargetBranchName);
}
else {
    console.log("Target Branch is NULL");
}
var gitPullRequestEventWrapperRepositoryService = Container_1.IoCContainer.resolve(IGitPullRequestEventWrapperRepositoryService_1.IGitPullRequestEventWrapperRepositoryService);
var gitPullRequestEventType = gitPullRequestEventWrapperRepositoryService.getGitPullRequestEventType();
if (gitPullRequestEventType != null) {
    console.log("Git Pull Request Event Type: " + GitPullRequestEventTypeEnum_1.GitPullRequestEventTypeEnum[gitPullRequestEventType.toString()]);
}
else {
    console.log("Git Pull Request Event Type is NULL");
}
var gitAuthenticationApplicationService = Container_1.IoCContainer.resolve(IGitAuthenticationApplicationService_1.IGitAuthenticationApplicationService);
var gitAuthentication = gitAuthenticationApplicationService.getGitAuthentication();
var gitRepositoryApplicationService = Container_1.IoCContainer.resolve(IGitRepositoryApplicationService_1.IGitRepositoryApplicationService);
var gitRepository = gitRepositoryApplicationService.getGitRepository();
var gitBranchApplicationService = Container_1.IoCContainer.resolve(IGitBranchApplicationService_1.IGitBranchApplicationService);
gitBranchApplicationService.getGitBranchComparison(gitSourceBranchName, gitTargetBranchName, gitRepository, gitAuthentication)
    .then(gitBranchComparison => {
    console.log("Number Of Commits Ahead: " + gitBranchComparison.numberOfCommitsAhead);
    console.log("Number Of Commits Behind: " + gitBranchComparison.numberOfCommitsBehind);
})
    .catch(_ => {
    console.log("Error when get git branch comparison");
});
//# sourceMappingURL=app.js.map