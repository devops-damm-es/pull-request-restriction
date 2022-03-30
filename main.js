const core = require('@actions/core');
const github = require('@actions/github');

const PULL_REQUEST_ALLOWED = "pull-request-allowed"

async function run() {
    try {
        let allowedPullRequestList = [];
        allowedPullRequestList.push({
            regexTarget: '^develop$',
            regexSource: '^feature\/.*'
         });
         allowedPullRequestList.push({
            regexTarget: '^main$',
            regexSource: '(^develop$)|(^hotfix\/.*)'
         });
         allowedPullRequestList.push({
            regexTarget: '^master$',
            regexSource: '(^develop$)|(^hotfix\/.*)'
         });

        let context = github.context;
        let eventName = context.eventName;
        let isPrTarget = eventName === "pull_request_target";
        if (eventName !== "pull_request" && !isPrTarget) {
            core.setFailed("The event must be pull_request or pull_request_target");
            return;
        }

        let payload = context.payload;
        let action = payload.action;
        if (action !== "opened" && action !== "edited") {
            core.info("Ignoring action that isn't opened or edited");
            return;
        }

        let pull_request = payload.pull_request;
        let pullRequestTarget = pull_request.base.ref;
        let pullRequestSource = pull_request.head.ref;

        function checkRegex(pattern, test) {
            let regex = new RegExp(pattern);
            return regex.test(test)
        }

        var allowedPullRequest = null;
        for (var index in allowedPullRequestList) {
            if (checkRegex(allowedPullRequestList[index].regexTarget, pullRequestTarget)) {
                allowedPullRequest = allowedPullRequestList[index];
            }
        }

        if (allowedPullRequest == null) {
            core.info("Target branch restriction not found: Allow Pull Request");
            core.setOutput(PULL_REQUEST_ALLOWED, true);
            return;
        } else {
            if (checkRegex(allowedPullRequest.regexSource, pullRequestSource)) {
                core.info("Target and Source branch restriction finded: Allow Pull Request");
                core.setOutput(PULL_REQUEST_ALLOWED, true);
                return;
            } else {
                core.setFailed("Restricted Target and Source branch: Not allow Pull Request");
                core.setOutput(PULL_REQUEST_ALLOWED, false);
                return;
            }
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
