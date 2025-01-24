function searchFilm(){let input=document.getElementById('search').value.toLowerCase();let films=document.querySelectorAll('.film');films.forEach(function(film){let title=film.querySelector('p').textContent.toLowerCase();if(title.includes(input)){film.style.display="block"}else{film.style.display="none"}})}
function filterByCategory(){let selectedCategory=document.getElementById('categorySelect').value;let films=document.querySelectorAll('.film');films.forEach(function(film){if(selectedCategory===""||film.getAttribute('data-category')===selectedCategory){film.style.display="block"}else{film.style.display="none"}})}
function applyFilters(){let input=document.getElementById('search').value.toLowerCase();let selectedCategory=document.getElementById('categorySelect').value;let films=document.querySelectorAll('.film');films.forEach(function(film){let title=film.querySelector('p').textContent.toLowerCase();let filmCategory=film.getAttribute('data-category');if((selectedCategory===""||filmCategory===selectedCategory)&&title.includes(input)){film.style.display="block"}else{film.style.display="none"}})}

// Sayfa yüklendiğinde kaydedilmiş temayı uygula
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
    updateButtonText(savedTheme);
});

// Tema değiştirme fonksiyonu
function toggleTheme() {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
}

// Buton metnini güncelle
function updateButtonText(theme) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.textContent = theme === 'dark' ? 'Gündüz Modu' : 'Gece Modu';
    }
}
