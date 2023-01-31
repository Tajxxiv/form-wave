const labels = document.querySelectorAll('.form-container label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((words, split) => `<span style="transition-delay:${split * 50}ms">${words}</span>`)
    .join('')
})
