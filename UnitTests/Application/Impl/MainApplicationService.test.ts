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

test("start_IsGitReleaseSourceBranchFalse_ActionResultTrue_Ok", async () => {
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
        mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService,
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
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.isGitReleaseSourceBranch).toBeCalledTimes(1);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.getGitReleasePreviousTargetBranch).toBeCalledTimes(0);
    expect(mockGitBranchGetGitBranchComparisonApplicationService.getGitBranchComparison).toBeCalledTimes(1);
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonTrueDomainService.isAllowedGitBranchComparison).toBeCalledTimes(1);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsAllowedGitEventTypeFalse_ActionResultFalse_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventGitEventTypePushApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeFalseDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsAllowedGitPullRequestTrueDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService,
        mockGitBranchGetGitBranchComparisonApplicationService,
        mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonTrueDomainService,
        mockActionResultApplicationService);

    // Act
    await sut.start();
    await new Promise(process.nextTick);

    // Assert
    expect(mockGitEventGitEventTypePushApplicationService.getGitEventType).toBeCalledTimes(1);
    expect(mockGitEventBusinessRuleIsAllowedGitEventTypeFalseDomainService.isAllowedGitEventType).toBeCalledTimes(1);
    expect(mockGitPullRequestEventApplicationService.getGitPullRequestEventType).toBeCalledTimes(0);
    expect(mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService.isAllowedGitPullRequestEventType).toBeCalledTimes(0);
    expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(0);
    expect(mockGitSourceBranchNameApplicationService.getGitSourceBranchName).toBeCalledTimes(0);
    expect(mockGitTargetBranchNameApplicationService.getGitTargetBranchName).toBeCalledTimes(0);
    expect(mockGitPullRequestBusinessRuleIsAllowedGitPullRequestTrueDomainService.isAllowedGitPullRequest).toBeCalledTimes(0);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(0);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(0);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.isGitReleaseSourceBranch).toBeCalledTimes(0);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.getGitReleasePreviousTargetBranch).toBeCalledTimes(0);
    expect(mockGitBranchGetGitBranchComparisonApplicationService.getGitBranchComparison).toBeCalledTimes(0);
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonTrueDomainService.isAllowedGitBranchComparison).toBeCalledTimes(0);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsAllowedGitPullRequestEventTypeFalse_ActionResultFalse_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventGitEventTypePushApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeFalseDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsAllowedGitPullRequestTrueDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService,
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
    expect(mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeFalseDomainService.isAllowedGitPullRequestEventType).toBeCalledTimes(1);
    expect(mockGitDefaultBranchNameApplicationService.getGitDefaultBranchName).toBeCalledTimes(0);
    expect(mockGitSourceBranchNameApplicationService.getGitSourceBranchName).toBeCalledTimes(0);
    expect(mockGitTargetBranchNameApplicationService.getGitTargetBranchName).toBeCalledTimes(0);
    expect(mockGitPullRequestBusinessRuleIsAllowedGitPullRequestTrueDomainService.isAllowedGitPullRequest).toBeCalledTimes(0);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(0);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(0);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.isGitReleaseSourceBranch).toBeCalledTimes(0);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.getGitReleasePreviousTargetBranch).toBeCalledTimes(0);
    expect(mockGitBranchGetGitBranchComparisonApplicationService.getGitBranchComparison).toBeCalledTimes(0);
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonTrueDomainService.isAllowedGitBranchComparison).toBeCalledTimes(0);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsAllowedGitPullRequestFalse_ActionResultFalse_Ok", async () => {
    // Arrange
    let sut = new MainApplicationService(
        mockGitEventGitEventTypePushApplicationService,
        mockGitEventBusinessRuleIsAllowedGitEventTypeTrueDomainService,
        mockGitPullRequestEventApplicationService,
        mockGitPullRequestEventBusinessRuleIsAllowedGitPullRequestEventTypeTrueDomainService,
        mockGitDefaultBranchNameApplicationService,
        mockGitSourceBranchNameApplicationService,
        mockGitTargetBranchNameApplicationService,
        mockGitPullRequestBusinessRuleIsAllowedGitPullRequestFalseDomainService,
        mockGitAuthenticationApplicationService,
        mockGitRepositoryApplicationService,
        mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService,
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
    expect(mockGitPullRequestBusinessRuleIsAllowedGitPullRequestFalseDomainService.isAllowedGitPullRequest).toBeCalledTimes(1);
    expect(mockGitAuthenticationApplicationService.getGitAuthentication).toBeCalledTimes(0);
    expect(mockGitRepositoryApplicationService.getGitRepository).toBeCalledTimes(0);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.isGitReleaseSourceBranch).toBeCalledTimes(0);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.getGitReleasePreviousTargetBranch).toBeCalledTimes(0);
    expect(mockGitBranchGetGitBranchComparisonApplicationService.getGitBranchComparison).toBeCalledTimes(0);
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonTrueDomainService.isAllowedGitBranchComparison).toBeCalledTimes(0);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsGitReleaseSourceBranchTrue_GetGitBranchComparisonReject_ActionResultFalse_Ok", async () => {
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
        mockGitBranchGetGitBranchComparisonRejectApplicationService,
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
    expect(mockGitBranchGetGitBranchComparisonRejectApplicationService.getGitBranchComparison).toBeCalledTimes(1);
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonTrueDomainService.isAllowedGitBranchComparison).toBeCalledTimes(0);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsGitReleaseSourceBranchTrue_GetGitBranchComparisonResolvePreviousTargetBranchRejectTargetBranch_ActionResultFalse_Ok", async () => {
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
        mockGitBranchGetGitBranchComparisonResolvePreviousTargetBranchRejectTargetBranchApplicationService,
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
    expect(mockGitBranchGetGitBranchComparisonResolvePreviousTargetBranchRejectTargetBranchApplicationService.getGitBranchComparison).toBeCalledTimes(2);
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonTrueDomainService.isAllowedGitBranchComparison).toBeCalledTimes(1);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsGitReleaseSourceBranchTrue_IsAllowedGitBranchComparisonFalse_ActionResultFalse_Ok", async () => {
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
        mockGitBranchGetGitBranchComparisonResolvePreviousTargetBranchRejectTargetBranchApplicationService,
        mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonFalseDomainService,
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
    expect(mockGitBranchGetGitBranchComparisonResolvePreviousTargetBranchRejectTargetBranchApplicationService.getGitBranchComparison).toBeCalledTimes(1);
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonFalseDomainService.isAllowedGitBranchComparison).toBeCalledTimes(1);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsGitReleaseSourceBranchTrue_GitBranchComparisonPreviousBranchComparisonTrueBranchComparisonFalse_ActionResultFalse_Ok", async () => {
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
        mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonPreviousBranchComparisonTrueBranchComparisonFalseDomainService,
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
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonPreviousBranchComparisonTrueBranchComparisonFalseDomainService.isAllowedGitBranchComparison).toBeCalledTimes(2);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsGitReleaseSourceBranchFalse_IsAllowedGitBranchComparisonFalse_ActionResultFalse_Ok", async () => {
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
        mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService,
        mockGitBranchGetGitBranchComparisonApplicationService,
        mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonFalseDomainService,
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
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.isGitReleaseSourceBranch).toBeCalledTimes(1);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.getGitReleasePreviousTargetBranch).toBeCalledTimes(0);
    expect(mockGitBranchGetGitBranchComparisonApplicationService.getGitBranchComparison).toBeCalledTimes(1);
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonFalseDomainService.isAllowedGitBranchComparison).toBeCalledTimes(1);
    expect(mockActionResultApplicationService.setActionResult).toBeCalledTimes(1);
});

test("start_IsGitReleaseSourceBranchFalse_GetGitBranchComparisonReject_ActionResultFalse_Ok", async () => {
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
        mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService,
        mockGitBranchGetGitBranchComparisonRejectApplicationService,
        mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonPreviousBranchComparisonTrueBranchComparisonFalseDomainService,
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
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.isGitReleaseSourceBranch).toBeCalledTimes(1);
    expect(mockGitReleaseBranchBusinessRuleIsGitReleaseSourceBranchFalseDomainService.getGitReleasePreviousTargetBranch).toBeCalledTimes(0);
    expect(mockGitBranchGetGitBranchComparisonRejectApplicationService.getGitBranchComparison).toBeCalledTimes(1);
    expect(mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonPreviousBranchComparisonTrueBranchComparisonFalseDomainService.isAllowedGitBranchComparison).toBeCalledTimes(0);
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
    getGitBranchComparison: jest.fn().mockImplementation((gitSourceBranchName, gitTargetBranchName, gitRepository, gitAuthentication) => {
        return new Promise<GitBranchComparison>(function (resolve, reject) {
            resolve(new GitBranchComparison(
                gitSourceBranchName,
                gitTargetBranchName,
                0,
                0
            ));
        });
    })
};

const mockGitBranchGetGitBranchComparisonRejectApplicationService: jest.Mocked<IGitBranchApplicationService> = {
    getGitBranchComparison: jest.fn().mockImplementation(() => {
        return new Promise<null>(function (resolve, reject) {
            reject(null);
        });
    })
};

const mockGitBranchGetGitBranchComparisonResolvePreviousTargetBranchRejectTargetBranchApplicationService: jest.Mocked<IGitBranchApplicationService> = {
    getGitBranchComparison: jest.fn().mockImplementation((gitSourceBranchName, gitTargetBranchName, gitRepository, gitAuthentication) => {
        if (gitTargetBranchName == "previousTargetBranch") {
            return new Promise<GitBranchComparison>(function (resolve, reject) {
                resolve(new GitBranchComparison(
                    gitSourceBranchName,
                    gitTargetBranchName,
                    0,
                    0
                ));
            });
        } else {
            return new Promise<null>(function (resolve, reject) {
                reject(null);
            });
        }
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

const mockGitBranchComparisonBusinessRuleIsAllowedGitBranchComparisonPreviousBranchComparisonTrueBranchComparisonFalseDomainService: jest.Mocked<IGitBranchComparisonBusinessRuleDomainService> = {
    isAllowedGitBranchComparison: jest.fn().mockImplementation((gitBranchComparison, gitDefaultBranchName) => {
        return gitBranchComparison.targetBranchName == "previousTargetBranch";
    })
};

const mockActionResultApplicationService: jest.Mocked<IActionResultApplicationService> = {
    setActionResult: jest.fn().mockImplementation(() => { })
};