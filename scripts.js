fetch("https://api.github.com/users/randymz10/repos")
    .then((resp) => resp.json())
    .then((data) => {
        const projects = data.
        createCards(data);
    })
    .catch((erro) => console.log(erro));

const createCards = (projects) => {
    const cards = document.querySelector('cards')
}