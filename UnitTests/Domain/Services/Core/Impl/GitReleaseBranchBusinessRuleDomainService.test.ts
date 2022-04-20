import { GitReleaseBranchBusinessRuleDomainService } from "../../../../../src/Domain/Services/Core/Impl/GitReleaseBranchBusinessRuleDomainService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("isGitReleaseSourceBranch_ReturnsTrue_Ok", () => {
  // Arrange
  let sut = new GitReleaseBranchBusinessRuleDomainService();

  // Act
  var result = sut.isGitReleaseSourceBranch("release/MyRelease");

  // Assert
  expect(result).toBe(true);
});

test("isGitReleaseSourceBranch_ReturnsFalse_Ok", () => {
  // Arrange
  let sut = new GitReleaseBranchBusinessRuleDomainService();

  // Act
  var result = sut.isGitReleaseSourceBranch("randomBranch");

  // Assert
  expect(result).toBe(false);
});

test("getGitReleasePreviousTargetBranch_Ok", () => {
  // Arrange
  let sut = new GitReleaseBranchBusinessRuleDomainService();

  // Act
  var result = sut.getGitReleasePreviousTargetBranch();

  // Assert
  expect(result).toBe("develop");
});