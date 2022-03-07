const process = require("process");
const cp = require("child_process");
const path = require("path");

test("check opened pr action", () => {
  process.env["GITHUB_SHA"] = "704a159e90d33dd51a69d8e29bd95eec70f9c002";
  process.env["GITHUB_REPOSITORY"] = "sogoagain/book-citation-generator";

  process.env["INPUT_GITHUB-TOKEN"] = "GITHUB_TOKEN";

  const ip = path.join(__dirname, "index.js");
  const result = cp.execSync(`node ${ip}`, { env: process.env }).toString();

  console.log(result);
});
