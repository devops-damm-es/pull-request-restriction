# Pull request restriction

Damm DevOps - Gitflow pull request restriction

This action allow:

- Pull Request from feature/*** to develop
- Pull Request from develop or hotfix/*** to default branch (usually main or master)
## Example usage

```yaml
name: 'Damm DevOps - Gitflow pull request restriction'
on: 
  pull_request:
    types: [opened, edited, reopened]
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