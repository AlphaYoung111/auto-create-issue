import { Octokie } from 'octokit'

const octokit = new Octokie({ auth: '' })

octokit.rest.issues.create({
  owner: "octocat",
  repo: "hello-world",
  title: "Hello world from " + slug,
});