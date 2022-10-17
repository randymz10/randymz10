fetch("https://api.github.com/users/randymz10/repos")
    .then((resp) => resp.json())
    .then((data) => {
        const projects = data;
        createCards(data);
    })
    .catch((erro) => console.log(erro));

const createCards = (projects) => {
    const cards = document.getElementById('cards');
    projects.forEach( card => {
        cards.innerHTML += 
        `
    <div class="col">
        <!--card -->
        <div class="card bg-dark mb-1">
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text"> ${card.description === null ? "Without description" : card.description}
            </div>
            <div class="card-footer">
                <a href="${card.homepage === null ? "Haven't Demo" : card.homepage}" target="_blank" class="btn btn-success btn-sm me-2">Demo</a>
                <a href="${card.html_url}" target="_blank" class="btn btn-success btn-sm ms-2">Repository</a>
            </div>
                
        </div>
    </div>
    `
    })
}