document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');

    video.addEventListener('play', function() {
        // This triggers the native "expand" function of the browser
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitEnterFullscreen) {
            // Specific for iPhones/Safari
            video.webkitEnterFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
});
