import { GitAuthentication } from "../../../../src/Domain/Entities/GitAuthentication";
import { GitBranchComparison } from "../../../../src/Domain/Entities/GitBranchComparison";
import { GitRepository } from "../../../../src/Domain/Entities/GitRepository";
import { GitBranchRepositoryService } from "../../../../src/Infrastructure/Core/Impl/GitBranchRepositoryService";
import { IGitBranchWrapperRepositoryService } from "../../../../src/Infrastructure/Core/Wrapper/IGitBranchWrapperRepositoryService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("getGitBranchComparison_Ok", () => {
  // Arrange
  let sut = new GitBranchRepositoryService(mockGitBranchWrapperRepositoryService);

  // Act
  var result = sut.getGitBranchComparison(
    "sourceBranchName",
    "targetBranchName",
    new GitRepository("owner", "name"),
    new GitAuthentication("token"));

  // Assert
  expect(mockGitBranchWrapperRepositoryService.getGitBranchComparison).toBeCalledTimes(1);
});

const mockGitBranchWrapperRepositoryService: jest.Mocked<IGitBranchWrapperRepositoryService> = {
  getGitBranchComparison: jest.fn().mockImplementation(() => {
    return new Promise<GitBranchComparison | null>(function (resolve, reject) { });
  })
};