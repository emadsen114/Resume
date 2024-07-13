const express = require('express');
const { readFile } = require('fs');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the home page
app.get('/', (request, response) => {
    readFile(path.join(__dirname, 'front-end', 'landing-page.html'), 'utf8', (err, html) => {        if (err) {
            console.error('Error reading landing-page.html:', err);
            response.status(500).send('Sorry, something went wrong!');
            return;
        } 
        response.send(html);
    });
});

app.get('/about-page', (request, response) => {
    readFile(path.join(__dirname, 'front-end','about-page.html'), 'utf8', (err, html) => {
        if (err) {
            console.error('Error reading about-page.html:', err);
            response.status(500).send('Sorry, something went wrong!');
            return;
        }
        response.send(html);
    });
});

app.listen(process.env.PORT || 4000, () => {
    console.log('App available on http://localhost:4000');
});
