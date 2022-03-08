const core = require("@actions/core");
const github = require("@actions/github");

const listPullRequestsByCommit = require("../api/listPullRequestsByCommit");

async function existsopenedPr({ token }) {
  try {
    const { repo, sha } = github.context;
    core.info(`target commit sha: ${sha}`);

    const pullRequests = await listPullRequestsByCommit({
      token,
      repo,
      commitSha: sha,
    });

    return pullRequests.filter((pr) => pr.state == "open").length != 0;
  } catch (err) {
    core.error(err);
    return false;
  }
}

module.exports = existsopenedPr;
