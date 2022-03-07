const github = require("@actions/github");

async function listPullRequestsByCommit({ token, repo, commitSha }) {
  const octokit = github.getOctokit(token);
  const response =
    await octokit.rest.repos.listPullRequestsAssociatedWithCommit({
      owner: repo.owner,
      repo: repo.repo,
      commit_sha: commitSha,
    });
  return response.data;
}

module.exports = listPullRequestsByCommit;
