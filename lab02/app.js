const dropdownGenre = document.getElementsByClassName('genre');
const dropdownType[j].ledocument.getElementsByClassName('type');
const dropdownSpec = document.getElementsByClassName('spec');
const output = document.getElementById('output');
const year = document.getElementById('year');
const museum = document.getElementById('museum');

year.addEventListener('keyup', () => {
    output.innerHTML = `<span class="mx-2">Year: ${year.value}</span>
            <span class="mx-2">Museum: ${museum.value}</span>
            <span class="mx-2">Genre: </span>
            <span class="mx-2">Type: </span>
            <span class="mx-2">Specification: </span>`;
})

museum.addEventListener('keyup', () => {
    output.innerHTML = `<span class="mx-2">Year: ${year.value}</span>
            <span class="mx-2">Museum: ${museum.value}</span>
            <span class="mx-2">Genre: </span>
            <span class="mx-2">Type: </span>
            <span class="mx-2">Specification: </span>`;
})

for (let i = 0; i < dropdownGenre.length; i++) {
    dropdownGenre[i].addEventListener('click', () => {
       output.innerHTML = `<span class="mx-2">Year: ${year.value}</span>
            <span class="mx-2">Museum: ${museum.value}</span>
            <span class="mx-2">Genre: ${dropdownGenre[i].innerText}</span>
            <span class="mx-2">Type: </span>
            <span class="mx-2">Specification: </span>`; 
    })
}
