document.querySelectorAll('.js-vote-arrows a').forEach((link) => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        let direction = link.dataset.direction;
        try {
            let response = await fetch('/comments/10/vote/' + direction, {
                method: 'POST'
            });
            let data = await response.json();
            document.querySelectorAll('.js-vote-total').forEach(el => el.innerText = data.votes);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});