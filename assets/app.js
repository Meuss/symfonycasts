/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

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