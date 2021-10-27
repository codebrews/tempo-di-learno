"use strict"

document.getElementById('embed').addEventListener("click", embed);

function embed() {
    const url = document.getElementById('youtube').value;
    const videoId = url.searchParams.get("v");

    document.getElementById('video').innerHTML =
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;
}

document.getElementById('set').addEventListener("click", setSpeed);

function setSpeed() {
    const speed = document.getElementById('speed').value;
    document.getElementById('video').defaultPlaybackRate = speed;
    document.getElementById('current-speed').innerHTML = speed;
}

console.log(document.getElementById('speed').value);