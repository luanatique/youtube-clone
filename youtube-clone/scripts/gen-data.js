import { faker } from 'https://esm.sh/@faker-js/faker';

const VIDEO_CATEGORIES = ['music', 'sports', 'gaming'];
const videoGrid = document.getElementById('videos');

for (const _ of Array(20)) {
    const randomVideo = {
        title: faker.commerce.productName(),
        channelName: faker.company.name(),
        category: faker.helpers.arrayElement(VIDEO_CATEGORIES),
        thumbnail: faker.image.urlPicsumPhotos({ width: 1280, height: 720 }),
    }
    const video = createVideo(randomVideo);
    videoGrid.appendChild(video);
}


function createVideo(videoInfo) {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    videoCard.classList.add(videoInfo.category);

    const thumbnail = document.createElement('img');
    thumbnail.alt = 'Video Thumbnail';
    thumbnail.src = videoInfo.thumbnail;

    const title = document.createElement('h3');
    title.textContent = videoInfo.title;

    const channelName = document.createElement('p');
    channelName.textContent = videoInfo.channelName;

    const category = document.createElement('p');
    category.textContent = videoInfo.category;

    videoCard.appendChild(thumbnail)
    videoCard.appendChild(title)
    videoCard.appendChild(channelName)
    videoCard.appendChild(category)

    return videoCard;
}