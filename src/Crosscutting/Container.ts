import { Container } from "typescript-ioc";
import { IActionResultApplicationService } from "../Application/Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../Application/Core/IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../Application/Core/IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../Application/Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../Application/Core/IGitEventApplicationService";
import { IGitPullRequestEventApplicationService } from "../Application/Core/IGitPullRequestEventApplicationService";
import { IGitRepositoryApplicationService } from "../Application/Core/IGitRepositoryApplicationService";
import { IGitSourceBranchNameApplicationService } from "../Application/Core/IGitSourceBranchNameApplicationService";
import { IGitTargetBranchNameApplicationService } from "../Application/Core/IGitTargetBranchNameApplicationService";
import { ActionResultApplicationService } from "../Application/Core/Impl/ActionResultApplicationService";
import { GitAuthenticationApplicationService } from "../Application/Core/Impl/GitAuthenticationApplicationService";
import { GitBranchApplicationService } from "../Application/Core/Impl/GitBranchApplicationService";
import { GitDefaultBranchNameApplicationService } from "../Application/Core/Impl/GitDefaultBranchNameApplicationService";
import { GitEventApplicationService } from "../Application/Core/Impl/GitEventApplicationService";
import { GitPullRequestEventApplicationService } from "../Application/Core/Impl/GitPullRequestEventApplicationService";
import { GitRepositoryApplicationService } from "../Application/Core/Impl/GitRepositoryApplicationService";
import { GitSourceBranchNameApplicationService } from "../Application/Core/Impl/GitSourceBranchNameApplicationService";
import { GitTargetBranchNameApplicationService } from "../Application/Core/Impl/GitTargetBranchNameApplicationService";
import { IActionResultDomainService } from "../Domain/Services/Core/IActionResultDomainService";
import { IGitAuthenticationDomainService } from "../Domain/Services/Core/IGitAuthenticationDomainService";
import { IGitBranchComparisonBusinessRuleDomainService } from "../Domain/Services/Core/IGitBranchComparisonBusinessRuleDomainService";
import { IGitBranchDomainService } from "../Domain/Services/Core/IGitBranchDomainService";
import { IGitDefaultBranchNameDomainService } from "../Domain/Services/Core/IGitDefaultBranchNameDomainService";
import { IGitEventBusinessRuleDomainService } from "../Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IGitEventDomainService } from "../Domain/Services/Core/IGitEventDomainService";
import { IGitPullRequestBusinessRuleDomainService } from "../Domain/Services/Core/IGitPullRequestBusinessRuleDomainService";
import { IGitPullRequestEventBusinessRuleDomainService } from "../Domain/Services/Core/IGitPullRequestEventBusinessRuleDomainService";
import { IGitPullRequestEventDomainService } from "../Domain/Services/Core/IGitPullRequestEventDomainService";
import { IGitReleaseBranchBusinessRuleDomainService } from "../Domain/Services/Core/IGitReleaseBranchBusinessRuleDomainService";
import { IGitRepositoryDomainService } from "../Domain/Services/Core/IGitRepositoryDomainService";
import { IGitSourceBranchNameDomainService } from "../Domain/Services/Core/IGitSourceBranchNameDomainService";
import { IGitTargetBranchNameDomainService } from "../Domain/Services/Core/IGitTargetBranchNameDomainService";
import { ActionResultDomainService } from "../Domain/Services/Core/Impl/ActionResultDomainService";
import { GitAuthenticationDomainService } from "../Domain/Services/Core/Impl/GitAuthenticationDomainService";
import { GitBranchComparisonBusinessRuleDomainService } from "../Domain/Services/Core/Impl/GitBranchComparisonBusinessRuleDomainService";
import { GitBranchDomainService } from "../Domain/Services/Core/Impl/GitBranchDomainService";
import { GitDefaultBranchNameDomainService } from "../Domain/Services/Core/Impl/GitDefaultBranchNameDomainService";
import { GitEventBusinessRuleDomainService } from "../Domain/Services/Core/Impl/GitEventBusinessRuleDomainService";
import { GitEventDomainService } from "../Domain/Services/Core/Impl/GitEventDomainService";
import { GitPullRequestBusinessRuleDomainService } from "../Domain/Services/Core/Impl/GitPullRequestBusinessRuleDomainService";
import { GitPullRequestEventBusinessRuleDomainService } from "../Domain/Services/Core/Impl/GitPullRequestEventBusinessRuleDomainService";
import { GitPullRequestEventDomainService } from "../Domain/Services/Core/Impl/GitPullRequestEventDomainService";
import { GitReleaseBranchBusinessRuleDomainService } from "../Domain/Services/Core/Impl/GitReleaseBranchBusinessRuleDomainService";
import { GitRepositoryDomainService } from "../Domain/Services/Core/Impl/GitRepositoryDomainService";
import { GitSourceBranchNameDomainService } from "../Domain/Services/Core/Impl/GitSourceBranchNameDomainService";
import { GitTargetBranchNameDomainService } from "../Domain/Services/Core/Impl/GitTargetBranchNameDomainService";
import { IActionResultRepositoryService } from "../Infrastructure/Core/IActionResultRepositoryService";
import { IGitAuthenticationRepositoryService } from "../Infrastructure/Core/IGitAuthenticationRepositoryService";
import { IGitBranchRepositoryService } from "../Infrastructure/Core/IGitBranchRepositoryService";
import { IGitDefaultBranchNameRepositoryService } from "../Infrastructure/Core/IGitDefaultBranchNameRepositoryService";
import { IGitEventRepositoryService } from "../Infrastructure/Core/IGitEventRepositoryService";
import { IGitPullRequestEventRepositoryService } from "../Infrastructure/Core/IGitPullRequestEventRepositoryService";
import { IGitRepositoryRepositoryService } from "../Infrastructure/Core/IGitRepositoryRepositoryService";
import { IGitSourceBranchNameRepositoryService } from "../Infrastructure/Core/IGitSourceBranchNameRepositoryService";
import { IGitTargetBranchNameRepositoryService } from "../Infrastructure/Core/IGitTargetBranchNameRepositoryService";
import { ActionResultRepositoryService } from "../Infrastructure/Core/Impl/ActionResultRepositoryService";
import { GitAuthenticationRepositoryService } from "../Infrastructure/Core/Impl/GitAuthenticationRepositoryService";
import { GitBranchRepositoryService } from "../Infrastructure/Core/Impl/GitBranchRepositoryService";
import { GitDefaultBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitDefaultBranchNameRepositoryService";
import { GitEventRepositoryService } from "../Infrastructure/Core/Impl/GitEventRepositoryService";
import { GitPullRequestEventRepositoryService } from "../Infrastructure/Core/Impl/GitPullRequestEventRepositoryService";
import { GitRepositoryRepositoryService } from "../Infrastructure/Core/Impl/GitRepositoryRepositoryService";
import { GitSourceBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitSourceBranchNameRepositoryService";
import { GitTargetBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitTargetBranchNameRepositoryService";
import { IActionResultWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IActionResultWrapperRepositoryService";
import { IGitAuthenticationWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitAuthenticationWrapperRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";
import { IGitDefaultBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService";
import { IGitEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitEventWrapperRepositoryService";
import { IGitPullRequestEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitPullRequestEventWrapperRepositoryService";
import { IGitRepositoryWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitRepositoryWrapperRepositoryService";
import { IGitSourceBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitSourceBranchNameWrapperRepositoryService";
import { IGitTargetBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitTargetBranchNameWrapperRepositoryService";
import { ActionResultWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/ActionResultWrapperRepositoryService";
import { GitAuthenticationWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitAuthenticationWrapperRepositoryService";
import { GitBranchWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitBranchWrapperRepositoryService";
import { GitDefaultBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitDefaultBranchNameWrapperRepositoryService";
import { GitEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitEventWrapperRepositoryService";
import { GitPullRequestEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitPullRequestEventWrapperRepositoryService";
import { GitRepositoryWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitRepositoryWrapperRepositoryService";
import { GitSourceBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitSourceBranchNameWrapperRepositoryService";
import { GitTargetBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitTargetBranchNameWrapperRepositoryService";

export class IoCContainer {
    private static isLoaded: boolean;

    private static loadContainer() {

        // Application
        Container.bind(IActionResultApplicationService).to(ActionResultApplicationService);
        Container.bind(IGitAuthenticationApplicationService).to(GitAuthenticationApplicationService);
        Container.bind(IGitBranchApplicationService).to(GitBranchApplicationService);
        Container.bind(IGitDefaultBranchNameApplicationService).to(GitDefaultBranchNameApplicationService);
        Container.bind(IGitEventApplicationService).to(GitEventApplicationService);
        Container.bind(IGitPullRequestEventApplicationService).to(GitPullRequestEventApplicationService);
        Container.bind(IGitRepositoryApplicationService).to(GitRepositoryApplicationService);
        Container.bind(IGitSourceBranchNameApplicationService).to(GitSourceBranchNameApplicationService);
        Container.bind(IGitTargetBranchNameApplicationService).to(GitTargetBranchNameApplicationService);

        // Domain
        Container.bind(IActionResultDomainService).to(ActionResultDomainService);
        Container.bind(IGitAuthenticationDomainService).to(GitAuthenticationDomainService);
        Container.bind(IGitBranchComparisonBusinessRuleDomainService).to(GitBranchComparisonBusinessRuleDomainService);
        Container.bind(IGitBranchDomainService).to(GitBranchDomainService);
        Container.bind(IGitDefaultBranchNameDomainService).to(GitDefaultBranchNameDomainService);
        Container.bind(IGitEventBusinessRuleDomainService).to(GitEventBusinessRuleDomainService);
        Container.bind(IGitEventDomainService).to(GitEventDomainService);
        Container.bind(IGitPullRequestBusinessRuleDomainService).to(GitPullRequestBusinessRuleDomainService);
        Container.bind(IGitPullRequestEventBusinessRuleDomainService).to(GitPullRequestEventBusinessRuleDomainService);
        Container.bind(IGitPullRequestEventDomainService).to(GitPullRequestEventDomainService);
        Container.bind(IGitReleaseBranchBusinessRuleDomainService).to(GitReleaseBranchBusinessRuleDomainService);
        Container.bind(IGitRepositoryDomainService).to(GitRepositoryDomainService);
        Container.bind(IGitSourceBranchNameDomainService).to(GitSourceBranchNameDomainService);
        Container.bind(IGitTargetBranchNameDomainService).to(GitTargetBranchNameDomainService);

        // Infrastructure
        Container.bind(IActionResultRepositoryService).to(ActionResultRepositoryService);
        Container.bind(IGitAuthenticationRepositoryService).to(GitAuthenticationRepositoryService);
        Container.bind(IGitBranchRepositoryService).to(GitBranchRepositoryService);
        Container.bind(IGitDefaultBranchNameRepositoryService).to(GitDefaultBranchNameRepositoryService);
        Container.bind(IGitEventRepositoryService).to(GitEventRepositoryService);
        Container.bind(IGitPullRequestEventRepositoryService).to(GitPullRequestEventRepositoryService);
        Container.bind(IGitRepositoryRepositoryService).to(GitRepositoryRepositoryService);
        Container.bind(IGitSourceBranchNameRepositoryService).to(GitSourceBranchNameRepositoryService);
        Container.bind(IGitTargetBranchNameRepositoryService).to(GitTargetBranchNameRepositoryService);

        Container.bind(IActionResultWrapperRepositoryService).to(ActionResultWrapperRepositoryService);
        Container.bind(IGitAuthenticationWrapperRepositoryService).to(GitAuthenticationWrapperRepositoryService);
        Container.bind(IGitBranchWrapperRepositoryService).to(GitBranchWrapperRepositoryService);
        Container.bind(IGitDefaultBranchNameWrapperRepositoryService).to(GitDefaultBranchNameWrapperRepositoryService);
        Container.bind(IGitEventWrapperRepositoryService).to(GitEventWrapperRepositoryService);
        Container.bind(IGitPullRequestEventWrapperRepositoryService).to(GitPullRequestEventWrapperRepositoryService);
        Container.bind(IGitRepositoryWrapperRepositoryService).to(GitRepositoryWrapperRepositoryService);
        Container.bind(IGitSourceBranchNameWrapperRepositoryService).to(GitSourceBranchNameWrapperRepositoryService);
        Container.bind(IGitTargetBranchNameWrapperRepositoryService).to(GitTargetBranchNameWrapperRepositoryService);
    }

    static resolve(arg: any): any {
        if (IoCContainer.isLoaded != true) {
            IoCContainer.loadContainer();
            IoCContainer.isLoaded = true;
        }
        return Container.get(arg);
    }
}

