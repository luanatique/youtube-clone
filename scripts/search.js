function searchVideo(event) {
    const videos = document.getElementsByClassName('video-card');
    const search = event.target.value.toLowerCase();

    for (const video of videos) {
        const videoinfo = {
            tittle: video.getElementsByTagName('h3')[0].innerText.toLowerCase(),
            channelName: video.getElementsByTagName('p')[0].innerText.toLowerCase(),
            category: video.getElementsByTagName('p')[1].innerText.toLowerCase()
        }

        video.style.display = 'revert';

        if (!matches(videoinfo, search)) {
            //remove da tela
            video.style.display = 'none';
        }

    }
}

function matches(videoInfo, searchTerm) {
    return (
        videoInfo.tittle.includes(searchTerm) ||
        videoInfo.channelName.includes(searchTerm) ||
        videoInfo.category.includes(searchTerm)
    )
}