import * as github from '@actions/github';
import { IGitSourceBranchNameWrapperRepositoryService } from '../IGitSourceBranchNameWrapperRepositoryService';

export class GitSourceBranchNameWrapperRepositoryService implements IGitSourceBranchNameWrapperRepositoryService {
    getGitSourceBranchName(): String | null {
        try {
            const sourceBranchName = github.context.payload.pull_request.head.ref;
            if (sourceBranchName != null && sourceBranchName.length > 0) {
                return sourceBranchName;
            } else {
                return null;
            }
        } catch {
            return null;
        }
    }
}