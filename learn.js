let user = document.querySelector(".get-repos input");
let input = document.querySelector(".get-button");
let data = document.querySelector(".data-show");

input.onclick = function () {
  getRepos();
};

function getRepos() {
  if (user.value == "") {
    data.innerHTML = "<span>pleas inter your github</span>";
  } else {
    fetch(`https://api.github.com/users/${user.value}/repos`)
      .then((repos) => {
        return repos.json();
      })
      .then((repoData) => {
        data.innerHTML = "";
        repoData.forEach((repo) => {
          let mainDiv = document.createElement("div");
          let textMainDiv = document.createTextNode(repo.name);
          mainDiv.appendChild(textMainDiv);
          let url = document.createElement("a");
          let textUrl = document.createTextNode("visit");
          url.appendChild(textUrl);
          url.href = `https://github.com/${user.value}/${repo.name}`;
          url.setAttribute("target", "_blank");
          let stargazersCount = document.createElement("span");
          let TextstargazersCount = document.createTextNode(`stars ${repo.stargazers_count}`);
          stargazersCount.appendChild(TextstargazersCount);
          mainDiv.appendChild(stargazersCount);
          mainDiv.appendChild(url);
          mainDiv.classList = "repo-box"
          data.appendChild(mainDiv);
        });
      });
  }
}
