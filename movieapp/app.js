$('form').on('submit', e => {
    e.preventDefault();
    const title = $('#movie').val()
    const rating = $('#rating').val()
    $(`<li>${title}: ${rating}</li>`)
        .appendTo('#movie-list')
        .append('<button>Remove</button');
});

$('#movie-list').on('click', 'button', e => {
    e.target.parentElement.remove();
})