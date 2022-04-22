import { IActionResultApplicationService } from "../../../src/Application/Core/IActionResultApplicationService";
import { IGitAuthenticationApplicationService } from "../../../src/Application/Core/IGitAuthenticationApplicationService";
import { IGitBranchApplicationService } from "../../../src/Application/Core/IGitBranchApplicationService";
import { IGitDefaultBranchNameApplicationService } from "../../../src/Application/Core/IGitDefaultBranchNameApplicationService";
import { IGitEventApplicationService } from "../../../src/Application/Core/IGitEventApplicationService";
import { IGitPullRequestEventApplicationService } from "../../../src/Application/Core/IGitPullRequestEventApplicationService";
import { IGitRepositoryApplicationService } from "../../../src/Application/Core/IGitRepositoryApplicationService";
import { IGitSourceBranchNameApplicationService } from "../../../src/Application/Core/IGitSourceBranchNameApplicationService";
import { IGitTargetBranchNameApplicationService } from "../../../src/Application/Core/IGitTargetBranchNameApplicationService";
import { MainApplicationService } from "../../../src/Application/Impl/MainApplicationService";
import { GitAuthentication } from "../../../src/Domain/Entities/GitAuthentication";
import { GitBranchComparison } from "../../../src/Domain/Entities/GitBranchComparison";
import { GitRepository } from "../../../src/Domain/Entities/GitRepository";
import { GitEventTypeEnum } from "../../../src/Domain/Enums/GitEventTypeEnum";
import { GitPullRequestEventTypeEnum } from "../../../src/Domain/Enums/GitPullRequestEventTypeEnum";
import { IGitBranchComparisonBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitBranchComparisonBusinessRuleDomainService";
import { IGitEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitEventBusinessRuleDomainService";
import { IGitPullRequestBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitPullRequestBusinessRuleDomainService";
import { IGitPullRequestEventBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitPullRequestEventBusinessRuleDomainService";
import { IGitReleaseBranchBusinessRuleDomainService } from "../../../src/Domain/Services/Core/IGitReleaseBranchBusinessRuleDomainService";

beforeEach(() => {
    jest.clearAllMocks();
});

test("start_IsGitReleaseSourceBranchTrue_ActionResultTrue_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventGitEventTypePushApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsAllowedGitPullRequestTrueDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchTrueDomainService,
        mockGitBranchGetGitBranchComparisonApplicationService,
        mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonTrueDomainService,
        mockActionResultApplicationService);

    // Act
    await sut.start();
    await new Promise(process.nextTick);

    // Assert
    expect(mockGitEventGitEventTypePushApplicationService.getGitEventType).toBeCalledTimes(1);
    expect(mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService.isAllowedGitEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventApplicationService.getGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService.isAllowedGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(1);
    expect(mockGitSourceBranchNameApplicationService.getGitSourceBranchName).toBeCalledTimes(1);
    expect(mockGitTargetBranchNameApplicationService.getGitTargetBranchName).toBeCalledTimes(1);
    expect(mockGitPullRequestBusinessRuleIsAllowedGitPullRequestTrueDomainService.isAllowedGitPullRequest).toBeCalledTimes(1);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(1);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(1);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchTrueDomainService.isGitReleaseSourceBranch).toBeCalledTimes(1);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchTrueDomainService.getGitReleasePreviousTargetBranch).toBeCalledTimes(1);
    expect(mockGitBranchGetGitBranchComparisonApplicationService.getGitBranchComparison).toBeCalledTimes(2);
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonTrueDomainService.isAllowedGitBranchComparison).toBeCalledTimes(2);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

const mockGitEventGitEventTypePushApplicationService: jest.Mocked<IGitEventApplicationService> = {
    getGitEventType: jest.fn().mockImplementation(() => {
        return GitEventTypeEnum.Push;
    })
};

const mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService: jest.Mocked<IGitEventBusinessRuleDomainService> = {
    isAllowedGitEventType: jest.fn().mockImplementation(() => {
        return true;
    })
};

const mockGitEventBusinessRuleIsAllowedGitEventTypeFalseDomainService: jest.Mocked<IGitEventBusinessRuleDomainService> = {
    isAllowedGitEventType: jest.fn().mockImplementation(() => {
        return false;
    })
};

const mockGitPullRequestEventApplicationService: jest.Mocked<IGitPullRequestEventApplicationService> = {
    getGitPullRequestEventType: jest.fn().mockImplementation(() => {
        return GitPullRequestEventTypeEnum.Opened;
    })
};

const mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService: jest.Mocked<IGitPullRequestEventBusinessRuleDomainService> = {
    isAllowedGitPullRequestEventType: jest.fn().mockImplementation(() => {
        return true;
    })
};

const mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeFalseDomainService: jest.Mocked<IGitPullRequestEventBusinessRuleDomainService> = {
    isAllowedGitPullRequestEventType: jest.fn().mockImplementation(() => {
        return false;
    })
};

const mockGitDefaultBranchNameApplicationService: jest.Mocked<IGitDefaultBranchNameApplicationService> = {
    getGitDefaultBranchName: jest.fn().mockImplementation(() => {
        return "main";
    })
};

const mockGitSourceBranchNameApplicationService: jest.Mocked<IGitSourceBranchNameApplicationService> = {
    getGitSourceBranchName: jest.fn().mockImplementation(() => {
        return "sourceBranchName";
    })
};

const mockGitTargetBranchNameApplicationService: jest.Mocked<IGitTargetBranchNameApplicationService> = {
    getGitTargetBranchName: jest.fn().mockImplementation(() => {
        return "targetBranchName";
    })
};

const mockGitPullRequestBusinessRuleIsAllowedGitPullRequestTrueDomainService: jest.Mocked<IGitPullRequestBusinessRuleDomainService> = {
    isAllowedGitPullRequest: jest.fn().mockImplementation(() => {
        return true;
    })
};

const mockGitPullRequestBusinessRuleIsAllowedGitPullRequestFalseDomainService: jest.Mocked<IGitPullRequestBusinessRuleDomainService> = {
    isAllowedGitPullRequest: jest.fn().mockImplementation(() => {
        return false;
    })
};

const mockGitAuthenticationApplicationService: jest.Mocked<IGitAuthenticationApplicationService> = {
    getGitAuthentication: jest.fn().mockImplementation(() => {
        return new GitAuthentication("token");
    })
};

const mockGitRepositoryApplicationService: jest.Mocked<IGitRepositoryApplicationService> = {
    getGitRepository: jest.fn().mockImplementation(() => {
        return new GitRepository("owner", "name");
    })
};

const mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchTrueDomainService: jest.Mocked<IGitReleaseBranchBusinessRuleDomainService> = {
    isGitReleaseSourceBranch: jest.fn().mockImplementation(() => {
        return true;
    }),
    getGitReleasePreviousTargetBranch: jest.fn().mockImplementation(() => {
        return "previousTargetBranch";
    })
};

const mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService: jest.Mocked<IGitReleaseBranchBusinessRuleDomainService> = {
    isGitReleaseSourceBranch: jest.fn().mockImplementation(() => {
        return false;
    }),
    getGitReleasePreviousTargetBranch: jest.fn().mockImplementation(() => {
        return "previousTargetBranch";
    })
};

const mockGitBranchGetGitBranchComparisonApplicationService: jest.Mocked<IGitBranchApplicationService> = {
    getGitBranchComparison: jest.fn().mockImplementation(() => {
        return new Promise<GitBranchComparison>(function (resolve, reject) {
            resolve(new GitBranchComparison(
                "sourceBranchName",
                "targetBranchName",
                0,
                0
            ));
        });
    })
};

const mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonTrueDomainService: jest.Mocked<IGitBranchComparisonBusinessRuleDomainService> = {
    isAllowedGitBranchComparison: jest.fn().mockImplementation(() => {
        return true;
    })
};

const mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonFalseDomainService: jest.Mocked<IGitBranchComparisonBusinessRuleDomainService> = {
    isAllowedGitBranchComparison: jest.fn().mockImplementation(() => {
        return false;
    })
};

const mockActionResultApplicationService: jest.Mocked<IActionResultApplicationService> = {
    setActionResult: jest.fn().mockImplementation(() => { })
};