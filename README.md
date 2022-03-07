# Check opened PR action

<p>
  <a href="https://github.com/sogoagain/check-opened-pr-action/actions"><img alt="check-opened-pr-action status" src="https://github.com/sogoagain/check-opened-pr-action/workflows/units-test/badge.svg"></a>
</p>

Check that the commit that triggered the workflow run exists as an open PR.

## Inputs

## `github-token`

**Required** A token to authenticate on behalf of the GitHub App installed on your repository. This is functionally equivalent to the GITHUB_TOKEN secret. Default `"github.token"`.

## Outputs

## `exists`

`true` if the commit that triggered the workflow run exists as opened PR, `false` otherwise.

## Example usage

```
uses: actions/check-opened-pr-action@v1.0
```
