"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainApplicationService = void 0;
const typescript_ioc_1 = require("typescript-ioc");
const IGitBranchComparisonBusinessRuleDomainService_1 = require("../../Domain/Services/Core/IGitBranchComparisonBusinessRuleDomainService");
const IGitEventBusinessRuleDomainService_1 = require("../../Domain/Services/Core/IGitEventBusinessRuleDomainService");
const IGitPullRequestBusinessRuleDomainService_1 = require("../../Domain/Services/Core/IGitPullRequestBusinessRuleDomainService");
const IGitPullRequestEventBusinessRuleDomainService_1 = require("../../Domain/Services/Core/IGitPullRequestEventBusinessRuleDomainService");
const IGitReleaseBranchBusinessRuleDomainService_1 = require("../../Domain/Services/Core/IGitReleaseBranchBusinessRuleDomainService");
const IActionResultApplicationService_1 = require("../Core/IActionResultApplicationService");
const IGitAuthenticationApplicationService_1 = require("../Core/IGitAuthenticationApplicationService");
const IGitBranchApplicationService_1 = require("../Core/IGitBranchApplicationService");
const IGitDefaultBranchNameApplicationService_1 = require("../Core/IGitDefaultBranchNameApplicationService");
const IGitEventApplicationService_1 = require("../Core/IGitEventApplicationService");
const IGitPullRequestEventApplicationService_1 = require("../Core/IGitPullRequestEventApplicationService");
const IGitRepositoryApplicationService_1 = require("../Core/IGitRepositoryApplicationService");
const IGitSourceBranchNameApplicationService_1 = require("../Core/IGitSourceBranchNameApplicationService");
const IGitTargetBranchNameApplicationService_1 = require("../Core/IGitTargetBranchNameApplicationService");
let MainApplicationService = class MainApplicationService {
    constructor(gitEventApplicationService, gitEventBusinessRuleDomainService, gitPullRequestEventApplicationService, gitPullRequestEventBusinessRuleDomainService, gitDefaultBranchNameApplicationService, gitSourceBranchNameApplicationService, gitTargetBranchNameApplicationService, gitPullRequestBusinessRuleDomainService, gitAuthenticationApplicationService, gitRepositoryApplicationService, gitReleaseBranchBusinessRuleDomainService, gitBranchApplicationService, gitBranchComparisonBusinessRuleDomainService, actionResultApplicationService) {
        this.gitEventApplicationService = gitEventApplicationService;
        this.gitEventBusinessRuleDomainService = gitEventBusinessRuleDomainService;
        this.gitPullRequestEventApplicationService = gitPullRequestEventApplicationService;
        this.gitPullRequestEventBusinessRuleDomainService = gitPullRequestEventBusinessRuleDomainService;
        this.gitDefaultBranchNameApplicationService = gitDefaultBranchNameApplicationService;
        this.gitSourceBranchNameApplicationService = gitSourceBranchNameApplicationService;
        this.gitTargetBranchNameApplicationService = gitTargetBranchNameApplicationService;
        this.gitPullRequestBusinessRuleDomainService = gitPullRequestBusinessRuleDomainService;
        this.gitAuthenticationApplicationService = gitAuthenticationApplicationService;
        this.gitRepositoryApplicationService = gitRepositoryApplicationService;
        this.gitReleaseBranchBusinessRuleDomainService = gitReleaseBranchBusinessRuleDomainService;
        this.gitBranchApplicationService = gitBranchApplicationService;
        this.gitBranchComparisonBusinessRuleDomainService = gitBranchComparisonBusinessRuleDomainService;
        this.actionResultApplicationService = actionResultApplicationService;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            var gitEventType = this.gitEventApplicationService.getGitEventType();
            if (this.gitEventBusinessRuleDomainService.isAllowedGitEventType(gitEventType)) {
                var gitPullRequestEventType = this.gitPullRequestEventApplicationService.getGitPullRequestEventType();
                if (this.gitPullRequestEventBusinessRuleDomainService.isAllowedGitPullRequestEventType(gitPullRequestEventType)) {
                    var gitDefaultBranchName = this.gitDefaultBranchNameApplicationService.getGitDefaultBranchName();
                    var gitSourceBranchName = this.gitSourceBranchNameApplicationService.getGitSourceBranchName();
                    var gitTargetBranchName = this.gitTargetBranchNameApplicationService.getGitTargetBranchName();
                    if (this.gitPullRequestBusinessRuleDomainService.isAllowedGitPullRequest(gitSourceBranchName, gitTargetBranchName, gitDefaultBranchName)) {
                        var gitAuthentication = this.gitAuthenticationApplicationService.getGitAuthentication();
                        var gitRepository = this.gitRepositoryApplicationService.getGitRepository();
                        if (this.gitReleaseBranchBusinessRuleDomainService.isGitReleaseSourceBranch(gitSourceBranchName)) {
                            var gitReleasePreviousTargetBranch = this.gitReleaseBranchBusinessRuleDomainService.getGitReleasePreviousTargetBranch();
                            this.gitBranchApplicationService.getGitBranchComparison(gitSourceBranchName, gitReleasePreviousTargetBranch, gitRepository, gitAuthentication)
                                .then(gitPreviousBranchComparison => {
                                if (this.gitBranchComparisonBusinessRuleDomainService.isAllowedGitBranchComparison(gitPreviousBranchComparison, gitDefaultBranchName)) {
                                    this._isAllowedSourceTargetGitBranchComparison(gitSourceBranchName, gitTargetBranchName, gitRepository, gitAuthentication, gitDefaultBranchName);
                                }
                                else {
                                    this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Release branch has commits that not in develop branch");
                                }
                            })
                                .catch(_ => {
                                this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Error when obtain git comparison between release and develop branches");
                            });
                        }
                        else {
                            this._isAllowedSourceTargetGitBranchComparison(gitSourceBranchName, gitTargetBranchName, gitRepository, gitAuthentication, gitDefaultBranchName);
                        }
                    }
                    else {
                        this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Git pull request between source and target branches is not allowed");
                    }
                }
                else {
                    this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Git pull request event type is not allowed");
                }
            }
            else {
                this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Git event type is not allowed");
            }
        });
    }
    _isAllowedSourceTargetGitBranchComparison(gitSourceBranchName, gitTargetBranchName, gitRepository, gitAuthentication, gitDefaultBranchName) {
        return __awaiter(this, void 0, void 0, function* () {
            this.gitBranchApplicationService.getGitBranchComparison(gitSourceBranchName, gitTargetBranchName, gitRepository, gitAuthentication)
                .then(gitBranchComparison => {
                if (this.gitBranchComparisonBusinessRuleDomainService.isAllowedGitBranchComparison(gitBranchComparison, gitDefaultBranchName)) {
                    this.actionResultApplicationService.setActionResult(true, "Pull request is allowed");
                }
                else {
                    this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Source branch has commits behind target branch");
                }
            })
                .catch(_ => {
                this.actionResultApplicationService.setActionResult(false, "Pull request is not allowed: Error when obtain git comparison between source and target branches");
            });
        });
    }
};
MainApplicationService = __decorate([
    __param(0, typescript_ioc_1.Inject),
    __param(1, typescript_ioc_1.Inject),
    __param(2, typescript_ioc_1.Inject),
    __param(3, typescript_ioc_1.Inject),
    __param(4, typescript_ioc_1.Inject),
    __param(5, typescript_ioc_1.Inject),
    __param(6, typescript_ioc_1.Inject),
    __param(7, typescript_ioc_1.Inject),
    __param(8, typescript_ioc_1.Inject),
    __param(9, typescript_ioc_1.Inject),
    __param(10, typescript_ioc_1.Inject),
    __param(11, typescript_ioc_1.Inject),
    __param(12, typescript_ioc_1.Inject),
    __param(13, typescript_ioc_1.Inject),
    __metadata("design:paramtypes", [IGitEventApplicationService_1.IGitEventApplicationService,
        IGitEventBusinessRuleDomainService_1.IGitEventBusinessRuleDomainService,
        IGitPullRequestEventApplicationService_1.IGitPullRequestEventApplicationService,
        IGitPullRequestEventBusinessRuleDomainService_1.IGitPullRequestEventBusinessRuleDomainService,
        IGitDefaultBranchNameApplicationService_1.IGitDefaultBranchNameApplicationService,
        IGitSourceBranchNameApplicationService_1.IGitSourceBranchNameApplicationService,
        IGitTargetBranchNameApplicationService_1.IGitTargetBranchNameApplicationService,
        IGitPullRequestBusinessRuleDomainService_1.IGitPullRequestBusinessRuleDomainService,
        IGitAuthenticationApplicationService_1.IGitAuthenticationApplicationService,
        IGitRepositoryApplicationService_1.IGitRepositoryApplicationService,
        IGitReleaseBranchBusinessRuleDomainService_1.IGitReleaseBranchBusinessRuleDomainService,
        IGitBranchApplicationService_1.IGitBranchApplicationService,
        IGitBranchComparisonBusinessRuleDomainService_1.IGitBranchComparisonBusinessRuleDomainService,
        IActionResultApplicationService_1.IActionResultApplicationService])
], MainApplicationService);
exports.MainApplicationService = MainApplicationService;
//# sourceMappingURL=MainApplicationService.js.map