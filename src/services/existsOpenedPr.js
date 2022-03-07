const core = require("@actions/core");
const github = require("@actions/github");

const listPullRequestsByCommit = require("../api/listPullRequestsByCommit");

async function existsopenedPr({ token }) {
  try {
    const { repo, sha } = github.context;
    const pullRequests = await listPullRequestsByCommit({
      token,
      repo,
      commitSha: sha,
    });

    return pullRequests.length != 0;
  } catch (err) {
    core.info(`error: ${err}`);
    return false;
  }
}

module.exports = existsopenedPr;
