const linksSocialMedia = {
  github: 'vgsstudio',
  twitter: 'vgs_studio',
  instagram: 'vgs_studio'
}

function changeSocialMediaLinks() {
  // Change all social media based on userInformations
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` // 0 -> a
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  // Get all information from github Api.
  const url = `https://api.github.com/users/${linksSocialMedia['github']}`

  fetch(url)
    .then(response => response.json()) // Get from url and transform to a Json
    .then(data => {
      nameGithub.textContent = data.name
      bioGithub.textContent = data.bio
      avatar_urlGithub.src = data.avatar_url
      html_urlGithub.href = data.html_url
      loginGithub.textContent = data.login
    })
}

getGithubProfileInfos()


