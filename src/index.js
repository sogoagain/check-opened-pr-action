const core = require("@actions/core");

const existsOpenedPr = require("./services/existsOpenedPr");

async function run() {
  try {
    const githubToken = core.getInput("github-token");
    core.debug(`GITHUB TOKEN: ${githubToken}`);

    const exists = await existsOpenedPr({ token: githubToken });
    core.setOutput("exists", exists);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
