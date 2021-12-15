const { Octokit } = require('octokit')

const core = require('@actions/core')

const dayjs = require('dayjs')

const token = core.getInput('token-prop')


const octokit = new Octokit({
  auth: token
})



const getTitle = () => dayjs().format('YYYY-MM-DD')

const getBody = () => `今天是${dayjs().get('date')}，早上好！`

octokit.rest.issues.create({
  owner: "AlphaYoung111",
  repo: "auto-create-issue",
  title: getTitle(),
  body: getBody()
});