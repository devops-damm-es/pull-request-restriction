"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCContainer = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const IActionResultApplicationService_1 = require("../Application/Core/IActionResultApplicationService");
const IGitAuthenticationApplicationService_1 = require("../Application/Core/IGitAuthenticationApplicationService");
const IGitBranchApplicationService_1 = require("../Application/Core/IGitBranchApplicationService");
const IGitDefaultBranchNameApplicationService_1 = require("../Application/Core/IGitDefaultBranchNameApplicationService");
const IGitEventApplicationService_1 = require("../Application/Core/IGitEventApplicationService");
const IGitPullRequestEventApplicationService_1 = require("../Application/Core/IGitPullRequestEventApplicationService");
const IGitRepositoryApplicationService_1 = require("../Application/Core/IGitRepositoryApplicationService");
const IGitSourceBranchNameApplicationService_1 = require("../Application/Core/IGitSourceBranchNameApplicationService");
const IGitTargetBranchNameApplicationService_1 = require("../Application/Core/IGitTargetBranchNameApplicationService");
const ActionResultApplicationService_1 = require("../Application/Core/Impl/ActionResultApplicationService");
const GitAuthenticationApplicationService_1 = require("../Application/Core/Impl/GitAuthenticationApplicationService");
const GitBranchApplicationService_1 = require("../Application/Core/Impl/GitBranchApplicationService");
const GitDefaultBranchNameApplicationService_1 = require("../Application/Core/Impl/GitDefaultBranchNameApplicationService");
const GitEventApplicationService_1 = require("../Application/Core/Impl/GitEventApplicationService");
const GitPullRequestEventApplicationService_1 = require("../Application/Core/Impl/GitPullRequestEventApplicationService");
const GitRepositoryApplicationService_1 = require("../Application/Core/Impl/GitRepositoryApplicationService");
const GitSourceBranchNameApplicationService_1 = require("../Application/Core/Impl/GitSourceBranchNameApplicationService");
const GitTargetBranchNameApplicationService_1 = require("../Application/Core/Impl/GitTargetBranchNameApplicationService");
const IMainApplicationService_1 = require("../Application/IMainApplicationService");
const MainApplicationService_1 = require("../Application/Impl/MainApplicationService");
const IActionResultDomainService_1 = require("../Domain/Services/Core/IActionResultDomainService");
const IGitAuthenticationDomainService_1 = require("../Domain/Services/Core/IGitAuthenticationDomainService");
const IGitBranchComparisonBusinessRuleDomainService_1 = require("../Domain/Services/Core/IGitBranchComparisonBusinessRuleDomainService");
const IGitBranchDomainService_1 = require("../Domain/Services/Core/IGitBranchDomainService");
const IGitDefaultBranchNameDomainService_1 = require("../Domain/Services/Core/IGitDefaultBranchNameDomainService");
const IGitEventBusinessRuleDomainService_1 = require("../Domain/Services/Core/IGitEventBusinessRuleDomainService");
const IGitEventDomainService_1 = require("../Domain/Services/Core/IGitEventDomainService");
const IGitPullRequestBusinessRuleDomainService_1 = require("../Domain/Services/Core/IGitPullRequestBusinessRuleDomainService");
const IGitPullRequestEventBusinessRuleDomainService_1 = require("../Domain/Services/Core/IGitPullRequestEventBusinessRuleDomainService");
const IGitPullRequestEventDomainService_1 = require("../Domain/Services/Core/IGitPullRequestEventDomainService");
const IGitReleaseBranchBusinessRuleDomainService_1 = require("../Domain/Services/Core/IGitReleaseBranchBusinessRuleDomainService");
const IGitRepositoryDomainService_1 = require("../Domain/Services/Core/IGitRepositoryDomainService");
const IGitSourceBranchNameDomainService_1 = require("../Domain/Services/Core/IGitSourceBranchNameDomainService");
const IGitTargetBranchNameDomainService_1 = require("../Domain/Services/Core/IGitTargetBranchNameDomainService");
const ActionResultDomainService_1 = require("../Domain/Services/Core/Impl/ActionResultDomainService");
const GitAuthenticationDomainService_1 = require("../Domain/Services/Core/Impl/GitAuthenticationDomainService");
const GitBranchComparisonBusinessRuleDomainService_1 = require("../Domain/Services/Core/Impl/GitBranchComparisonBusinessRuleDomainService");
const GitBranchDomainService_1 = require("../Domain/Services/Core/Impl/GitBranchDomainService");
const GitDefaultBranchNameDomainService_1 = require("../Domain/Services/Core/Impl/GitDefaultBranchNameDomainService");
const GitEventBusinessRuleDomainService_1 = require("../Domain/Services/Core/Impl/GitEventBusinessRuleDomainService");
const GitEventDomainService_1 = require("../Domain/Services/Core/Impl/GitEventDomainService");
const GitPullRequestBusinessRuleDomainService_1 = require("../Domain/Services/Core/Impl/GitPullRequestBusinessRuleDomainService");
const GitPullRequestEventBusinessRuleDomainService_1 = require("../Domain/Services/Core/Impl/GitPullRequestEventBusinessRuleDomainService");
const GitPullRequestEventDomainService_1 = require("../Domain/Services/Core/Impl/GitPullRequestEventDomainService");
const GitReleaseBranchBusinessRuleDomainService_1 = require("../Domain/Services/Core/Impl/GitReleaseBranchBusinessRuleDomainService");
const GitRepositoryDomainService_1 = require("../Domain/Services/Core/Impl/GitRepositoryDomainService");
const GitSourceBranchNameDomainService_1 = require("../Domain/Services/Core/Impl/GitSourceBranchNameDomainService");
const GitTargetBranchNameDomainService_1 = require("../Domain/Services/Core/Impl/GitTargetBranchNameDomainService");
const IActionResultRepositoryService_1 = require("../Infrastructure/Core/IActionResultRepositoryService");
const IGitAuthenticationRepositoryService_1 = require("../Infrastructure/Core/IGitAuthenticationRepositoryService");
const IGitBranchRepositoryService_1 = require("../Infrastructure/Core/IGitBranchRepositoryService");
const IGitDefaultBranchNameRepositoryService_1 = require("../Infrastructure/Core/IGitDefaultBranchNameRepositoryService");
const IGitEventRepositoryService_1 = require("../Infrastructure/Core/IGitEventRepositoryService");
const IGitPullRequestEventRepositoryService_1 = require("../Infrastructure/Core/IGitPullRequestEventRepositoryService");
const IGitRepositoryRepositoryService_1 = require("../Infrastructure/Core/IGitRepositoryRepositoryService");
const IGitSourceBranchNameRepositoryService_1 = require("../Infrastructure/Core/IGitSourceBranchNameRepositoryService");
const IGitTargetBranchNameRepositoryService_1 = require("../Infrastructure/Core/IGitTargetBranchNameRepositoryService");
const ActionResultRepositoryService_1 = require("../Infrastructure/Core/Impl/ActionResultRepositoryService");
const GitAuthenticationRepositoryService_1 = require("../Infrastructure/Core/Impl/GitAuthenticationRepositoryService");
const GitBranchRepositoryService_1 = require("../Infrastructure/Core/Impl/GitBranchRepositoryService");
const GitDefaultBranchNameRepositoryService_1 = require("../Infrastructure/Core/Impl/GitDefaultBranchNameRepositoryService");
const GitEventRepositoryService_1 = require("../Infrastructure/Core/Impl/GitEventRepositoryService");
const GitPullRequestEventRepositoryService_1 = require("../Infrastructure/Core/Impl/GitPullRequestEventRepositoryService");
const GitRepositoryRepositoryService_1 = require("../Infrastructure/Core/Impl/GitRepositoryRepositoryService");
const GitSourceBranchNameRepositoryService_1 = require("../Infrastructure/Core/Impl/GitSourceBranchNameRepositoryService");
const GitTargetBranchNameRepositoryService_1 = require("../Infrastructure/Core/Impl/GitTargetBranchNameRepositoryService");
const IActionResultWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IActionResultWrapperRepositoryService");
const IGitAuthenticationWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService");
const IGitBranchWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService");
const IGitDefaultBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService");
const IGitEventWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitEventWrapperRepositoryService");
const IGitPullRequestEventWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitPullRequestEventWrapperRepositoryService");
const IGitRepositoryWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService");
const IGitSourceBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitSourceBranchNameWrapperRepositoryService");
const IGitTargetBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/IGitTargetBranchNameWrapperRepositoryService");
const ActionResultWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/ActionResultWrapperRepositoryService");
const GitAuthenticationWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitAuthenticationWrapperRepositoryService");
const GitBranchWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitBranchWrapperRepositoryService");
const GitDefaultBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitDefaultBranchNameWrapperRepositoryService");
const GitEventWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitEventWrapperRepositoryService");
const GitPullRequestEventWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitPullRequestEventWrapperRepositoryService");
const GitRepositoryWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitRepositoryWrapperRepositoryService");
const GitSourceBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitSourceBranchNameWrapperRepositoryService");
const GitTargetBranchNameWrapperRepositoryService_1 = require("../Infrastructure/Core/Wrapper/Impl/GitTargetBranchNameWrapperRepositoryService");
class IoCContainer {
    static loadContainer() {
        // Application
        typescript_ioc_1.Container.bind(IActionResultApplicationService_1.IActionResultApplicationService).to(ActionResultApplicationService_1.ActionResultApplicationService);
        typescript_ioc_1.Container.bind(IGitAuthenticationApplicationService_1.IGitAuthenticationApplicationService).to(GitAuthenticationApplicationService_1.GitAuthenticationApplicationService);
        typescript_ioc_1.Container.bind(IGitBranchApplicationService_1.IGitBranchApplicationService).to(GitBranchApplicationService_1.GitBranchApplicationService);
        typescript_ioc_1.Container.bind(IGitDefaultBranchNameApplicationService_1.IGitDefaultBranchNameApplicationService).to(GitDefaultBranchNameApplicationService_1.GitDefaultBranchNameApplicationService);
        typescript_ioc_1.Container.bind(IGitEventApplicationService_1.IGitEventApplicationService).to(GitEventApplicationService_1.GitEventApplicationService);
        typescript_ioc_1.Container.bind(IGitPullRequestEventApplicationService_1.IGitPullRequestEventApplicationService).to(GitPullRequestEventApplicationService_1.GitPullRequestEventApplicationService);
        typescript_ioc_1.Container.bind(IGitRepositoryApplicationService_1.IGitRepositoryApplicationService).to(GitRepositoryApplicationService_1.GitRepositoryApplicationService);
        typescript_ioc_1.Container.bind(IGitSourceBranchNameApplicationService_1.IGitSourceBranchNameApplicationService).to(GitSourceBranchNameApplicationService_1.GitSourceBranchNameApplicationService);
        typescript_ioc_1.Container.bind(IGitTargetBranchNameApplicationService_1.IGitTargetBranchNameApplicationService).to(GitTargetBranchNameApplicationService_1.GitTargetBranchNameApplicationService);
        typescript_ioc_1.Container.bind(IMainApplicationService_1.IMainApplicationService).to(MainApplicationService_1.MainApplicationService);
        // Domain
        typescript_ioc_1.Container.bind(IActionResultDomainService_1.IActionResultDomainService).to(ActionResultDomainService_1.ActionResultDomainService);
        typescript_ioc_1.Container.bind(IGitAuthenticationDomainService_1.IGitAuthenticationDomainService).to(GitAuthenticationDomainService_1.GitAuthenticationDomainService);
        typescript_ioc_1.Container.bind(IGitBranchComparisonBusinessRuleDomainService_1.IGitBranchComparisonBusinessRuleDomainService).to(GitBranchComparisonBusinessRuleDomainService_1.GitBranchComparisonBusinessRuleDomainService);
        typescript_ioc_1.Container.bind(IGitBranchDomainService_1.IGitBranchDomainService).to(GitBranchDomainService_1.GitBranchDomainService);
        typescript_ioc_1.Container.bind(IGitDefaultBranchNameDomainService_1.IGitDefaultBranchNameDomainService).to(GitDefaultBranchNameDomainService_1.GitDefaultBranchNameDomainService);
        typescript_ioc_1.Container.bind(IGitEventBusinessRuleDomainService_1.IGitEventBusinessRuleDomainService).to(GitEventBusinessRuleDomainService_1.GitEventBusinessRuleDomainService);
        typescript_ioc_1.Container.bind(IGitEventDomainService_1.IGitEventDomainService).to(GitEventDomainService_1.GitEventDomainService);
        typescript_ioc_1.Container.bind(IGitPullRequestBusinessRuleDomainService_1.IGitPullRequestBusinessRuleDomainService).to(GitPullRequestBusinessRuleDomainService_1.GitPullRequestBusinessRuleDomainService);
        typescript_ioc_1.Container.bind(IGitPullRequestEventBusinessRuleDomainService_1.IGitPullRequestEventBusinessRuleDomainService).to(GitPullRequestEventBusinessRuleDomainService_1.GitPullRequestEventBusinessRuleDomainService);
        typescript_ioc_1.Container.bind(IGitPullRequestEventDomainService_1.IGitPullRequestEventDomainService).to(GitPullRequestEventDomainService_1.GitPullRequestEventDomainService);
        typescript_ioc_1.Container.bind(IGitReleaseBranchBusinessRuleDomainService_1.IGitReleaseBranchBusinessRuleDomainService).to(GitReleaseBranchBusinessRuleDomainService_1.GitReleaseBranchBusinessRuleDomainService);
        typescript_ioc_1.Container.bind(IGitRepositoryDomainService_1.IGitRepositoryDomainService).to(GitRepositoryDomainService_1.GitRepositoryDomainService);
        typescript_ioc_1.Container.bind(IGitSourceBranchNameDomainService_1.IGitSourceBranchNameDomainService).to(GitSourceBranchNameDomainService_1.GitSourceBranchNameDomainService);
        typescript_ioc_1.Container.bind(IGitTargetBranchNameDomainService_1.IGitTargetBranchNameDomainService).to(GitTargetBranchNameDomainService_1.GitTargetBranchNameDomainService);
        // Infrastructure
        typescript_ioc_1.Container.bind(IActionResultRepositoryService_1.IActionResultRepositoryService).to(ActionResultRepositoryService_1.ActionResultRepositoryService);
        typescript_ioc_1.Container.bind(IGitAuthenticationRepositoryService_1.IGitAuthenticationRepositoryService).to(GitAuthenticationRepositoryService_1.GitAuthenticationRepositoryService);
        typescript_ioc_1.Container.bind(IGitBranchRepositoryService_1.IGitBranchRepositoryService).to(GitBranchRepositoryService_1.GitBranchRepositoryService);
        typescript_ioc_1.Container.bind(IGitDefaultBranchNameRepositoryService_1.IGitDefaultBranchNameRepositoryService).to(GitDefaultBranchNameRepositoryService_1.GitDefaultBranchNameRepositoryService);
        typescript_ioc_1.Container.bind(IGitEventRepositoryService_1.IGitEventRepositoryService).to(GitEventRepositoryService_1.GitEventRepositoryService);
        typescript_ioc_1.Container.bind(IGitPullRequestEventRepositoryService_1.IGitPullRequestEventRepositoryService).to(GitPullRequestEventRepositoryService_1.GitPullRequestEventRepositoryService);
        typescript_ioc_1.Container.bind(IGitRepositoryRepositoryService_1.IGitRepositoryRepositoryService).to(GitRepositoryRepositoryService_1.GitRepositoryRepositoryService);
        typescript_ioc_1.Container.bind(IGitSourceBranchNameRepositoryService_1.IGitSourceBranchNameRepositoryService).to(GitSourceBranchNameRepositoryService_1.GitSourceBranchNameRepositoryService);
        typescript_ioc_1.Container.bind(IGitTargetBranchNameRepositoryService_1.IGitTargetBranchNameRepositoryService).to(GitTargetBranchNameRepositoryService_1.GitTargetBranchNameRepositoryService);
        typescript_ioc_1.Container.bind(IActionResultWrapperRepositoryService_1.IActionResultWrapperRepositoryService).to(ActionResultWrapperRepositoryService_1.ActionResultWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitAuthenticationWrapperRepositoryService_1.IGitAuthenticationWrapperRepositoryService).to(GitAuthenticationWrapperRepositoryService_1.GitAuthenticationWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitBranchWrapperRepositoryService_1.IGitBranchWrapperRepositoryService).to(GitBranchWrapperRepositoryService_1.GitBranchWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitDefaultBranchNameWrapperRepositoryService_1.IGitDefaultBranchNameWrapperRepositoryService).to(GitDefaultBranchNameWrapperRepositoryService_1.GitDefaultBranchNameWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitEventWrapperRepositoryService_1.IGitEventWrapperRepositoryService).to(GitEventWrapperRepositoryService_1.GitEventWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitPullRequestEventWrapperRepositoryService_1.IGitPullRequestEventWrapperRepositoryService).to(GitPullRequestEventWrapperRepositoryService_1.GitPullRequestEventWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitRepositoryWrapperRepositoryService_1.IGitRepositoryWrapperRepositoryService).to(GitRepositoryWrapperRepositoryService_1.GitRepositoryWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitSourceBranchNameWrapperRepositoryService_1.IGitSourceBranchNameWrapperRepositoryService).to(GitSourceBranchNameWrapperRepositoryService_1.GitSourceBranchNameWrapperRepositoryService);
        typescript_ioc_1.Container.bind(IGitTargetBranchNameWrapperRepositoryService_1.IGitTargetBranchNameWrapperRepositoryService).to(GitTargetBranchNameWrapperRepositoryService_1.GitTargetBranchNameWrapperRepositoryService);
    }
    static resolve(arg) {
        if (IoCContainer.isLoaded != true) {
            IoCContainer.loadContainer();
            IoCContainer.isLoaded = true;
        }
        return typescript_ioc_1.Container.get(arg);
    }
}
exports.IoCContainer = IoCContainer;
//# sourceMappingURL=Container.js.map