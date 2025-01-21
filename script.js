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

function filterByCategory() {
    let selectedCategory = document.getElementById('categorySelect').value;
    let films = document.querySelectorAll('.film');

    films.forEach(function(film) {
        if (selectedCategory === "" || film.getAttribute('data-category') === selectedCategory) {
            film.style.display = "block";
        } else {
            film.style.display = "none";
        }
    });
}

function applyFilters() {
    let input = document.getElementById('search').value.toLowerCase();
    let selectedCategory = document.getElementById('categorySelect').value;
    let films = document.querySelectorAll('.film');

    films.forEach(function(film) {
        let title = film.querySelector('p').textContent.toLowerCase();
        let filmCategory = film.getAttribute('data-category');
        
        if (
            (selectedCategory === "" || filmCategory === selectedCategory) &&
            title.includes(input)
        ) {
            film.style.display = "block";
        } else {
            film.style.display = "none";
        }
    });
}
