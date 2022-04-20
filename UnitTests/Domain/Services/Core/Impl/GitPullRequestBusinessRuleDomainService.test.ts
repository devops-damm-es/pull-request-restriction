import { GitPullRequestBusinessRuleDomainService } from "../../../../../src/Domain/Services/Core/Impl/GitPullRequestBusinessRuleDomainService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("isAllowedGitPullRequest_DevelopTarget_ReturnsTrue_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "feature/MyFeature"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isAllowedGitPullRequest(sourceBranchNameArray[index], "develop", "main");

    // Assert
    expect(result).toBe(true);
  }
});

test("isAllowedGitPullRequest_MainTarget_ReturnsTrue_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "develop",
    "release/MyRelease",
    "hotfix/MyHotfix"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isAllowedGitPullRequest(sourceBranchNameArray[index], "main", "main");

    // Assert
    expect(result).toBe(true);
  }
});

test("isAllowedGitPullRequest_MasterTarget_ReturnsTrue_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "develop",
    "release/MyRelease",
    "hotfix/MyHotfix"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isAllowedGitPullRequest(sourceBranchNameArray[index], "master", "master");

    // Assert
    expect(result).toBe(true);
  }
});

test("isAllowedGitPullRequest_DevelopTarget_ReturnsFalse_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "release/MyRelease",
    "hotfix/MyHotfix"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isAllowedGitPullRequest(sourceBranchNameArray[index], "develop", "main");

    // Assert
    expect(result).toBe(false);
  }
});

test("isAllowedGitPullRequest_MainTarget_ReturnsTrue_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "feature/MyFeature"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isAllowedGitPullRequest(sourceBranchNameArray[index], "main", "main");

    // Assert
    expect(result).toBe(false);
  }
});

test("isAllowedGitPullRequest_MasterTarget_ReturnsTrue_Ok", () => {
  // Arrange
  var sourceBranchNameArray = [
    "feature/MyFeature"
  ];
  let sut = new GitPullRequestBusinessRuleDomainService();

  for (var index in sourceBranchNameArray) {

    // Act
    var result = sut.isAllowedGitPullRequest(sourceBranchNameArray[index], "master", "master");

    // Assert
    expect(result).toBe(false);
  }
});