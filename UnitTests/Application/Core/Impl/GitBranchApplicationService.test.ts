import { IGitBranchRepositoryService } from "../../../../src/Infrastructure/Core/IGitBranchRepositoryService";
import { IGitBranchDomainService } from "../../../../src/Domain/Services/Core/IGitBranchDomainService";
import { GitBranchApplicationService } from "../../../../src/Application/Core/Impl/GitBranchApplicationService";
import { GitAuthentication } from "../../../../src/Domain/Entities/GitAuthentication";
import { GitRepository } from "../../../../src/Domain/Entities/GitRepository";
import { GitBranchComparison } from "../../../../src/Domain/Entities/GitBranchComparison";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitBranchComparison_Ok", () => {
  // Arrange
  let sut = new GitBranchApplicationService(mockGitBranchDomainService);

  // Act
  var result = sut.getGitBranchComparison(
    "sourceBranchName",
    "targetBranchName",
    new GitRepository("owner", "name"),
    new GitAuthentication("token"));

  // Assert
  expect(mockGitBranchDomainService.getRepositoryService).toBeCalledTimes(1);
  expect(mockGitBranchRepositoryService.getGitBranchComparison).toBeCalledTimes(1);
});

const mockGitBranchRepositoryService: jest.Mocked<IGitBranchRepositoryService> = {
  getGitBranchComparison: jest.fn().mockImplementation(() => {
    return new Promise<GitBranchComparison | null>(function (resolve, reject) { });
  })
};

const mockGitBranchDomainService: jest.Mocked<IGitBranchDomainService> = {
  getRepositoryService: jest.fn().mockImplementation(() => {
    return mockGitBranchRepositoryService;
  })
};