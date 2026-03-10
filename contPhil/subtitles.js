document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector('video');
    const display = document.getElementById('subtitle_box');
    const tracks = video.textTracks;

    if (tracks.length > 0) {
        const track = tracks[0];
        
        // "hidden" allows us to listen to cues without browser overlays
        track.mode = 'hidden';

        track.oncuechange = () => {
            if (track.activeCues && track.activeCues.length > 0) {
                display.innerText = track.activeCues[0].text;
            } else {
                display.innerText = ""; 
            }
        };
    }
});
