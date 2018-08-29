function showRepositories(event, data) {
  console.log(this.responseText)
  let repoList = "<ul>"
  for (let response in responseText) {
    repoList += `<li>${this.response["name"]}</li>`
  }
  repoList += "</ul>"
  
  document.getElementById("repositories").innerHTML = repoList
}

function getRepositories() {
  const req = new XMLHttpRequest()
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}

