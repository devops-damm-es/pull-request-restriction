# Pull request restriction

Damm DevOps - Gitflow pull request restriction

This action allow pull request when:

- Pull Request from feature/xxx to develop
- Pull Request from develop, release/xxx or hotfix/xxx to default branch (usually main or master)

And not allow pull request when:

- Release branch has commits that not in develop branch
- Source branch has commits behind target branch
## Example usage

```yaml
name: 'Damm DevOps - Gitflow pull request restriction'
on: 
  pull_request:
    types: [opened, edited, reopened, synchronize]
jobs:
  build:
    runs-on: ubuntu-latest
    name: Verify Gitflow pull request restriction
    steps:
      - name: Verify Gitflow pull request restriction
        uses: devops-damm-es/pull-request-restriction@v1.0.0
```
# Output Variables

## pull_request_allowed

Boolean output indicating if pull request target and source branch is allowed.