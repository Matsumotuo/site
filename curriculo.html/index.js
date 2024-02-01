function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.classList.toggle('open');
    section.classList.toggle('closed');
    var content = section.querySelector('ul') || section.querySelector('p');
    content.classList.toggle('hidden');
}