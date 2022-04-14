"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = require("./Crosscutting/Container");
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
//# sourceMappingURL=app.js.map