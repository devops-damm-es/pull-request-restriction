import { Container } from "typescript-ioc";
import { IActionResultApplicationService } from "../Application/Core/IActionResultApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../Application/Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../Application/Core/IGitEventApplicationService";
import { IGitPullRequestEventApplicationService } from "../Application/Core/IGitPullRequestEventApplicationService";
import { IGitSourceBranchNameApplicationService } from "../Application/Core/IGitSourceBranchNameApplicationService";
import { IGitTargetBranchNameApplicationService } from "../Application/Core/IGitTargetBranchNameApplicationService";
import { ActionResultApplicationService } from "../Application/Core/Impl/ActionResultApplicationService";
import { GitDefaultBranchNameApplicationService } from "../Application/Core/Impl/GitDefaultBranchNameApplicationService";
import { GitEventApplicationService } from "../Application/Core/Impl/GitEventApplicationService";
import { GitPullRequestEventApplicationService } from "../Application/Core/Impl/GitPullRequestEventApplicationService";
import { GitSourceBranchNameApplicationService } from "../Application/Core/Impl/GitSourceBranchNameApplicationService";
import { GitTargetBranchNameApplicationService } from "../Application/Core/Impl/GitTargetBranchNameApplicationService";
import { IActionResultDomainService } from "../Domain/Services/Core/IActionResultDomainService";
import { IGitDefaultBranchNameDomainService } from "../Domain/Services/Core/IGitDefaultBranchNameDomainService";
import { IGitEventBusinessRuleDomainService } from "../Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IGitEventDomainService } from "../Domain/Services/Core/IGitEventDomainService";
import { IGitPullRequestEventBusinessRuleDomainService } from "../Domain/Services/Core/IGitPullRequestEventBusinessRuleDomainService";
import { IGitPullRequestEventDomainService } from "../Domain/Services/Core/IGitPullRequestEventDomainService";
import { IGitSourceBranchNameDomainService } from "../Domain/Services/Core/IGitSourceBranchNameDomainService";
import { IGitTargetBranchNameDomainService } from "../Domain/Services/Core/IGitTargetBranchNameDomainService";
import { ActionResultDomainService } from "../Domain/Services/Core/Impl/ActionResultDomainService";
import { GitDefaultBranchNameDomainService } from "../Domain/Services/Core/Impl/GitDefaultBranchNameDomainService";
import { GitEventBusinessRuleDomainService } from "../Domain/Services/Core/Impl/GitEventBusinessRuleDomainService";
import { GitEventDomainService } from "../Domain/Services/Core/Impl/GitEventDomainService";
import { GitPullRequestEventBusinessRuleDomainService } from "../Domain/Services/Core/Impl/GitPullRequestEventBusinessRuleDomainService";
import { GitPullRequestEventDomainService } from "../Domain/Services/Core/Impl/GitPullRequestEventDomainService";
import { GitSourceBranchNameDomainService } from "../Domain/Services/Core/Impl/GitSourceBranchNameDomainService";
import { GitTargetBranchNameDomainService } from "../Domain/Services/Core/Impl/GitTargetBranchNameDomainService";
import { IActionResultRepositoryService } from "../Infrastructure/Core/IActionResultRepositoryService";
import { IGitDefaultBranchNameRepositoryService } from "../Infrastructure/Core/IGitDefaultBranchNameRepositoryService";
import { IGitEventRepositoryService } from "../Infrastructure/Core/IGitEventRepositoryService";
import { IGitPullRequestEventRepositoryService } from "../Infrastructure/Core/IGitPullRequestEventRepositoryService";
import { IGitSourceBranchNameRepositoryService } from "../Infrastructure/Core/IGitSourceBranchNameRepositoryService";
import { IGitTargetBranchNameRepositoryService } from "../Infrastructure/Core/IGitTargetBranchNameRepositoryService";
import { ActionResultRepositoryService } from "../Infrastructure/Core/Impl/ActionResultRepositoryService";
import { GitDefaultBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitDefaultBranchNameRepositoryService";
import { GitEventRepositoryService } from "../Infrastructure/Core/Impl/GitEventRepositoryService";
import { GitPullRequestEventRepositoryService } from "../Infrastructure/Core/Impl/GitPullRequestEventRepositoryService";
import { GitSourceBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitSourceBranchNameRepositoryService";
import { GitTargetBranchNameRepositoryService } from "../Infrastructure/Core/Impl/GitTargetBranchNameRepositoryService";
import { IActionResultWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IActionResultWrapperRepositoryService";
import { IGitDefaultBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitDefaultBranchNameWrapperRepositoryService";
import { IGitEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitEventWrapperRepositoryService";
import { IGitPullRequestEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitPullRequestEventWrapperRepositoryService";
import { IGitSourceBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitSourceBranchNameWrapperRepositoryService";
import { IGitTargetBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/IGitTargetBranchNameWrapperRepositoryService";
import { ActionResultWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/ActionResultWrapperRepositoryService";
import { GitDefaultBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitDefaultBranchNameWrapperRepositoryService";
import { GitEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitEventWrapperRepositoryService";
import { GitPullRequestEventWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitPullRequestEventWrapperRepositoryService";
import { GitSourceBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitSourceBranchNameWrapperRepositoryService";
import { GitTargetBranchNameWrapperRepositoryService } from "../Infrastructure/Core/Wrapper/Impl/GitTargetBranchNameWrapperRepositoryService";

export class IoCContainer {
    private static isLoaded: boolean;

    private static loadContainer() {

        // Application
        Container.bind(IActionResultApplicationService).to(ActionResultApplicationService);
        Container.bind(IGitDefaultBranchNameApplicationService).to(GitDefaultBranchNameApplicationService);
        Container.bind(IGitEventApplicationService).to(GitEventApplicationService);
        Container.bind(IGitPullRequestEventApplicationService).to(GitPullRequestEventApplicationService);
        Container.bind(IGitSourceBranchNameApplicationService).to(GitSourceBranchNameApplicationService);
        Container.bind(IGitTargetBranchNameApplicationService).to(GitTargetBranchNameApplicationService);

        // Domain
        Container.bind(IActionResultDomainService).to(ActionResultDomainService);
        Container.bind(IGitDefaultBranchNameDomainService).to(GitDefaultBranchNameDomainService);
        Container.bind(IGitEventBusinessRuleDomainService).to(GitEventBusinessRuleDomainService);
        Container.bind(IGitEventDomainService).to(GitEventDomainService);
        Container.bind(IGitPullRequestEventBusinessRuleDomainService).to(GitPullRequestEventBusinessRuleDomainService);
        Container.bind(IGitPullRequestEventDomainService).to(GitPullRequestEventDomainService);
        Container.bind(IGitSourceBranchNameDomainService).to(GitSourceBranchNameDomainService);
        Container.bind(IGitTargetBranchNameDomainService).to(GitTargetBranchNameDomainService);

        // Infrastructure
        Container.bind(IActionResultRepositoryService).to(ActionResultRepositoryService);
        Container.bind(IGitDefaultBranchNameRepositoryService).to(GitDefaultBranchNameRepositoryService);
        Container.bind(IGitEventRepositoryService).to(GitEventRepositoryService);
        Container.bind(IGitPullRequestEventRepositoryService).to(GitPullRequestEventRepositoryService);
        Container.bind(IGitSourceBranchNameRepositoryService).to(GitSourceBranchNameRepositoryService);
        Container.bind(IGitTargetBranchNameRepositoryService).to(GitTargetBranchNameRepositoryService);

        Container.bind(IActionResultWrapperRepositoryService).to(ActionResultWrapperRepositoryService);
        Container.bind(IGitDefaultBranchNameWrapperRepositoryService).to(GitDefaultBranchNameWrapperRepositoryService);
        Container.bind(IGitEventWrapperRepositoryService).to(GitEventWrapperRepositoryService);
        Container.bind(IGitPullRequestEventWrapperRepositoryService).to(GitPullRequestEventWrapperRepositoryService);
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

