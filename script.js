function searchFilm() {
    let input = document.getElementById('search').value.toLowerCase();
    let films = document.querySelectorAll('.film');

    films.forEach(function(film) {
        let title = film.querySelector('p').textContent.toLowerCase();
        if (title.includes(input)) {
            film.style.display = "block";
        } else {
            film.style.display = "none";
        }
    });
}
