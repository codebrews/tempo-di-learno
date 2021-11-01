"use strict"

// document.getElementById('embed').addEventListener("click", embed);

// function embed() {
//     const url = new URL(document.getElementById('url').value);
//     const videoId = url.searchParams.get('v');

//     document.getElementById('video').innerHTML =
//         `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player"
//         frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen></iframe>`;
// }

// document.getElementById('set').addEventListener("click", setSpeed);

// function setSpeed() {
//     const speed = document.getElementById('speed').value;
//     console.log(document.getElementById('video'));
//     const video = document.getElementById('video').firstChild.firstChild.playbackRate = speed;
//     document.getElementById('current-speed').innerHTML = speed;
// }

document.getElementById('upload').addEventListener('click', (event) => {
    var file = document.getElementById('audio-file').files[0];
    console.log(file);
    var audio = new Audio(file);
    document.getElementById('audio-player').setAttribute('src', file);
});