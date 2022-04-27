import { GitBranchComparison } from "../../../../../src/Domain/Entities/GitBranchComparison";
import { GitBranchComparisonBusinessRuleDomainService } from "../../../../../src/Domain/Services/Core/Impl/GitBranchComparisonBusinessRuleDomainService";

beforeEach(() => {
  jest.clearAllMocks();
});

test("isAllowedGitBranchComparison_ReleaseSourceBranch_DevelopTargetBranch_ReturnsTrue_Ok", () => {
  // Arrange
  var gitBranchComparison = new GitBranchComparison(
    "release/MyRelease",
    "develop",
    0,
    2);
  let sut = new GitBranchComparisonBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranchComparison(gitBranchComparison, "main");

  // Assert
  expect(result).toBe(true);
});

test("isAllowedGitBranchComparison_ReleaseSourceBranch_DevelopTargetBranch_ReturnsFalse_Ok", () => {
  // Arrange
  var gitBranchComparison = new GitBranchComparison(
    "release/MyRelease",
    "develop",
    1,
    2);
  let sut = new GitBranchComparisonBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranchComparison(gitBranchComparison, "main");

  // Assert
  expect(result).toBe(false);
});

test("isAllowedGitBranchComparison_DevelopSourceBranch_MasterTargetBranch_ReturnsTrue_Ok", () => {
  // Arrange
  var gitBranchComparison = new GitBranchComparison(
    "develop",
    "main",
    1,
    2);
  let sut = new GitBranchComparisonBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranchComparison(gitBranchComparison, "main");

  // Assert
  expect(result).toBe(true);
});

test("isAllowedGitBranchComparison_ReleaseSourceBranch_MasterTargetBranch_ReturnsTrue_Ok", () => {
  // Arrange
  var gitBranchComparison = new GitBranchComparison(
    "release/MyRelease",
    "main",
    1,
    2);
  let sut = new GitBranchComparisonBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranchComparison(gitBranchComparison, "main");

  // Assert
  expect(result).toBe(true);
});

test("isAllowedGitBranchComparison_ReturnsTrue_Ok", () => {
  // Arrange
  var gitBranchComparison = new GitBranchComparison(
    "otherSourceBranches",
    "otherTargetBranches",
    1,
    0);
  let sut = new GitBranchComparisonBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranchComparison(gitBranchComparison, "main");

  // Assert
  expect(result).toBe(true);
});

test("isAllowedGitBranchComparison_ReturnsFalse_Ok", () => {
  // Arrange
  var gitBranchComparison = new GitBranchComparison(
    "otherSourceBranches",
    "otherTargetBranches",
    1,
    2);
  let sut = new GitBranchComparisonBusinessRuleDomainService();

  // Act
  var result = sut.isAllowedGitBranchComparison(gitBranchComparison, "main");

  // Assert
  expect(result).toBe(false);
});