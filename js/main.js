const user = prompt("Digite seu usuario")
const url = "https://api.github.com/users/"+user;

function getUser() {
    axios.get(url)
        .then(response => {
            const data = response.data;
            Name.textContent = data.name;
            profilePhoto.src = data.avatar_url;
            followers.textContent = `${data.followers} Seguidores`;
            following.textContent = `${data.following} Seguindo`;
            repos.textContent = `${data.public_repos} Repositórios`
            company.textContent = `@${data.company}`;
            localizacao.textContent = data.location
        })
        .catch(error => console.error(error));
}

getUser();