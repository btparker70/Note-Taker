# Hello, folks! <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">
Thanks for visiting! My name is Brian and I am a web development student through UCSD's extension program. You can find me here at [LinkedIn](https://www.linkedin.com/in/brian-parker-79871819b/)

<br>

![JS](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# Note-Taker
A simple note taking app

[![Screenshot](https://github.com/btparker70/Note-Taker/blob/main/readmeassets/img1.png?raw=true)


# Table of Contents

* [Usage](#Usage)
* [What I learned](#What-I-Learned)
* [License](#License)

# Usage
Run the app by starting a node server using server.js. Open it on a browser and head to the routes /, /notes and /api/notes. On /notes you can see the main functionality of the program. Enter a title and text into the textareas and hit the 'save' button on the top right. This saves the note to the save area on the left. Hit the 'pencil' to edit and create a new not. Hit the 'trash can' to delete saved notes. Head to /api/notes to see the json file for the database of notes created.

# What I learned

This project taught me a lot about using json files as a database and making get, post and delete requests using express.js. Json files represent objects as strings, so within my store.js file I needed to read, append, delete and save the json files. I also used synchronous methods to read and write the json files, which works for this project but isn't best practice, because the program needs to wait for the entire database file to be read or written before it can move on. This is bad for large databases because it backs up the server when requests come in and leave the servers vulnerable to DDOS attacks.

# License
This repository is released under the [MIT License](https://opensource.org/licenses/MIT)