# Pull Request restriction

Damm DevOps - Gitflow Pull Request restriction

This action allow:

- Pull Request from feature/*** to develop
- Pull Request from develop or hotfix/*** to main
- Pull Request from develop or hotfix/*** to master

## Example usage

```yaml
name: 'Damm DevOps - Gitflow Pull Request restriction'
on:
  pull_request:
    types: [opened, edited]
jobs:
  build:
    runs-on: ubuntu-latest
    name: Verify Gitflow Pull Request restriction
    steps:
      - name: Verify Gitflow Pull Request restriction
        uses: devops-damm-es/pull-request-restriction@v1.0.0
```

# Output Variables

## pull-request-allowed

Boolean output indicating if the target and source branch is allowed.