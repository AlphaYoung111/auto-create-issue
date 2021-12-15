const { Octokit } = require('octokit')

const core = require('@actions/core')

const token = core.getInput('token-prop')

const octokit = new Octokit({
  auth: token
})



octokit.rest.issues.create({
  owner: "AlphaYoung111",
  repo: "auto-create-issue",
  title: "Hello world from issue",
  body: 'test'
});