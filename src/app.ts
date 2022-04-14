import { IoCContainer } from "./Crosscutting/Container";
import { GitPullRequestEventTypeEnum } from "./Domain/Enums/GitPullRequestEventTypeEnum";
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