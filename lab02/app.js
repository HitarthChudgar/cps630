const year = document.getElementById('year');
const museum = document.getElementById('museum');
const dropdownGenre = document.getElementsByClassName('genre');
const dropdownType = document.getElementsByClassName('type');
const dropdownSpec = document.getElementsByClassName('spec');
const outputgenre = document.getElementById('outputgenre');
const outputtype = document.getElementById('outputtype');
const outputmuseum = document.getElementById('outputmuseum');
const outputyear = document.getElementById('outputyear');
const outputspec = document.getElementById('outputspec');


for (let i = 0; i < dropdownGenre.length; i++) {
    dropdownGenre[i].addEventListener('click', () => {
        outputgenre.innerHTML = `
            <span class="mx-2">Genre: ${dropdownGenre[i].innerText}</span>`;
    })
}

for (let i = 0; i < dropdownType.length; i++) {
    dropdownType[i].addEventListener('click', () => {
        outputtype.innerHTML = `
            <span class="mx-2">Type: ${dropdownType[i].innerText}</span>`;
    })
}

for (let i = 0; i < dropdownSpec.length; i++) {
    dropdownSpec[i].addEventListener('click', () => {
        outputspec.innerHTML = `
            <span class="mx-2">Genre: ${dropdownSpec[i].innerText}</span>`;
    })
}


year.addEventListener('keyup', () => {
    outputyear.innerHTML = `<span class="mx-2">Year: ${year.value}</span>`;
})

museum.addEventListener('keyup', () => {
    outputmuseum.innerHTML = `<span class="mx-2">Museum: ${museum.value}</span>`;
})