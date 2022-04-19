import { IGitAuthenticationApplicationService } from "./Application/Core/IGitAuthenticationApplicationService";
import { IGitRepositoryApplicationService } from "./Application/Core/IGitRepositoryApplicationService";
import { IoCContainer } from "./Crosscutting/Container";
import { GitPullRequestEventTypeEnum } from "./Domain/Enums/GitPullRequestEventTypeEnum";
import { IGitBranchWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";
import { IGitPullRequestEventWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitPullRequestEventWrapperRepositoryService";
import { IGitSourceBranchNameWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitSourceBranchNameWrapperRepositoryService";
import { IGitTargetBranchNameWrapperRepositoryService } from "./Infrastructure/Core/Wrapper/IGitTargetBranchNameWrapperRepositoryService";

var gitSourceBranchNameWrapperRepositoryService = IoCContainer.resolve(IGitSourceBranchNameWrapperRepositoryService);
var gitSourceBranchName = gitSourceBranchNameWrapperRepositoryService.getGitSourceBranchName();
if (gitSourceBranchName != null) {
    console.log("Source Branch: " + gitSourceBranchName);
} else {
    console.log("Source Branch is NULL");
}

var gitTargetBranchNameWrapperRepositoryService = IoCContainer.resolve(IGitTargetBranchNameWrapperRepositoryService);
var gitTargetBranchName = gitTargetBranchNameWrapperRepositoryService.getGitTargetBranchName();
if (gitTargetBranchName != null) {
    console.log("Target Branch: " + gitTargetBranchName);
} else {
    console.log("Target Branch is NULL");
}

var gitPullRequestEventWrapperRepositoryService = IoCContainer.resolve(IGitPullRequestEventWrapperRepositoryService);
var gitPullRequestEventType = gitPullRequestEventWrapperRepositoryService.getGitPullRequestEventType();
if (gitPullRequestEventType != null) {
    console.log("Git Pull Request Event Type: " + GitPullRequestEventTypeEnum[gitPullRequestEventType.toString()]);
} else {
    console.log("Git Pull Request Event Type is NULL");
}

var gitAuthenticationApplicationService = IoCContainer.resolve(IGitAuthenticationApplicationService);
var gitAuthentication = gitAuthenticationApplicationService.getGitAuthentication();

var gitRepositoryApplicationService = IoCContainer.resolve(IGitRepositoryApplicationService);
var gitRepository = gitRepositoryApplicationService.getGitRepository();

var gitBranchWrapperRepositoryService = IoCContainer.resolve(IGitBranchWrapperRepositoryService);
gitBranchWrapperRepositoryService.getGitBranchComparison(
    gitSourceBranchName,
    gitTargetBranchName,
    gitRepository,
    gitAuthentication)
    .then(gitBranchComparison => {
        console.log("Number Of Commits Ahead: " + gitBranchComparison.numberOfCommitsAhead);
        console.log("Number Of Commits Behind: " + gitBranchComparison.numberOfCommitsBehind);
    })
    .catch(_ => {
        console.log("Error when get git branch comparison");
    })