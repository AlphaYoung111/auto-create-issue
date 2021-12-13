const { Octokit } = require('octokit')

const octokit = new Octokit({ auth: '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' })

octokit.rest.issues.create({
  owner: "AlphaYoung111",
  repo: "auto-create-issue",
  title: "Hello world from issue",
  body: 'test'
});