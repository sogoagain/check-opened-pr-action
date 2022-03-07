const github = require("@actions/github");

const listPullRequestsByCommit = require("./listPullRequestsByCommit");

const PULL_REQUESTS = require("../__fixtures__/pullRequests");

jest.mock("@actions/github");

const mockOctokit = {
  rest: {
    repos: {
      listPullRequestsAssociatedWithCommit: jest.fn(),
    },
  },
};

beforeEach(() => {
  mockOctokit.rest.repos.listPullRequestsAssociatedWithCommit.mockClear();
  mockOctokit.rest.repos.listPullRequestsAssociatedWithCommit.mockResolvedValue(
    {
      status: 200,
      url: "https://api.github.com/repos/sogoagain/blog/commits/9b8c48b8ba6f2d256ecd06ba9adffbc22e86476d/pulls",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      data: PULL_REQUESTS,
    }
  );
  github.getOctokit.mockImplementation(() => mockOctokit);
});

test(`'listPullRequestsByCommit' returns a list of PRs related to commit.`, async () => {
  const pullRequests = await listPullRequestsByCommit({
    token: "GITHUB_TOKEN",
    repo: {
      owner: "octocat",
      repo: "Hello-World",
    },
    commitSha: "6dcb09b5b57875f334f61aebed695e2e4193db5e",
  });

  expect(pullRequests).toEqual(PULL_REQUESTS);
});
