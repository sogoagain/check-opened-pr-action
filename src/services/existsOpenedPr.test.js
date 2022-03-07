const existsopenedPr = require("./existsOpenedPr");
const listPullRequestsByCommit = require("../api/listPullRequestsByCommit");

const PULL_REQUESTS = require("../__fixtures__/pullRequests");

jest.mock("../api/listPullRequestsByCommit");

beforeEach(() => {
  listPullRequestsByCommit.mockClear();

  process.env["GITHUB_SHA"] = "6dcb09b5b57875f334f61aebed695e2e4193db5e";
  process.env["GITHUB_REPOSITORY"] = "octocat/Hello-World";
});

describe("existsOpenPr", () => {
  describe("if there is opened PR", () => {
    beforeEach(() => {
      listPullRequestsByCommit.mockResolvedValue(PULL_REQUESTS);
    });

    test("returns true", async () => {
      const exists = await existsopenedPr({ token: "GITHUB_TOKEN" });

      expect(exists).toEqual(true);
    });
  });

  describe("if there is no opened PR", () => {
    beforeEach(() => {
      listPullRequestsByCommit.mockResolvedValue([]);
    });

    test("returns false", async () => {
      const exists = await existsopenedPr({ token: "GITHUB_TOKEN" });

      expect(exists).toEqual(false);
    });
  });

  describe("if an error occurs", () => {
    beforeEach(() => {
      listPullRequestsByCommit.mockRejectedValue(new Error("Async error"));
    });

    test("returns false", async () => {
      const exists = await existsopenedPr({ token: "GITHUB_TOKEN" });

      expect(exists).toEqual(false);
    });
  });
});
