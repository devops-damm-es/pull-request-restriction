import * as github from '@actions/github';
import { IGitTargetBranchNameWrapperRepositoryService } from '../IGitTargetBranchNameWrapperRepositoryService';

export class GitTargetBranchNameWrapperRepositoryService implements IGitTargetBranchNameWrapperRepositoryService {
    getGitTargetBranchName(): String | null {
        try {
            const targetBranchName = github.context.payload.pull_request.base.ref;
            if (targetBranchName != null && targetBranchName.length > 0) {
                return targetBranchName;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    }
}