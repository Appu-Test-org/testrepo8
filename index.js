module.exports = app => {
 // a typical probot app only exports `app`
  app.on('issues.opened', check) 
  // when issues are opened call the `check` fucntion
  async function check (context) { 
  // `check` fucntion that takes a context that has a `context.payload` the webhook payload and `context.github` authenticated github client using octokit/rest.js
    await context.github.issues.addLabels(context.issue({ labels: ['needs-response'] }))
    // await because it's async,
    // issues.addLabels() is from octokit/rest.js docs
    // context.issue() is an internal probot api that returns => {owner: 'username', repo: 'reponame', 'number': 123}
    // context.issue() is specific to the issue webhook event that was triggered and contains the info to reference that specific issue
  }
}