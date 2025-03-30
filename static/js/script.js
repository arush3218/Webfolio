// static/js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Music player controls
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    const musicStatus = document.getElementById('musicStatus');
    let musicPlaying = false;
    
    // Function to toggle music
    function toggleMusic() {
        if (musicPlaying) {
            bgMusic.pause();
            musicStatus.textContent = 'Play Music';
            musicPlaying = false;
        } else {
            // Auto-play is often blocked by browsers, so this should be triggered by user action
            bgMusic.play().then(() => {
                musicStatus.textContent = 'Pause Music';
                musicPlaying = true;
            }).catch(error => {
                console.error('Error playing music:', error);
                alert('Unable to play music. Please check your browser settings.');
            });
        }
    }
    
    // Add event listener to toggle button
    if (musicToggle) {
        musicToggle.addEventListener('click', toggleMusic);
    }
});