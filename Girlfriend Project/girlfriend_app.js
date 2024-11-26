const images = [
  'assets/us.png',
  'assets/image2.jpg',
  'assets/image3.jpg'
];

const poems = [
  "Roses are red, violets are blue, you're my sunshine, my skies so true.",
  "Forever in my heart, you shine brighter than any star.",
  "Every moment with you feels like a dream come true."
];

const comments = [
  "You are my favorite person in the whole world.",
  "I adore your kindness and your smile.",
  "You make every day magical and full of joy."
];
const catPictures = [
  'assets/willie1.jpg',
  'assets/willie2.jpg',
  'assets/willie3.jpg'
];

const loveStoryPictures = [
  { src: 'assets/story1.jpg', caption: 'The day we first met – the start of everything.' },
  { src: 'assets/story2.jpg', caption: 'Our first adventure together – what a memory!' },
  { src: 'assets/story3.jpg', caption: 'The day we knew we were meant to be.' }
];

const letter = "My dearest love, you are the light of my life. Every day with you is a blessing, and I can't wait to share more memories together. ❤️";

function openModal(content) {
  const popupContent = document.getElementById('popupContent');
  popupContent.innerHTML = content;
  document.getElementById('popupModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('popupModal').style.display = 'none';
}

function showRandomImage() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  openModal(`<img src="${randomImage}" alt="Random Image">`);
}

function showRandomPoem() {
  const randomPoem = poems[Math.floor(Math.random() * poems.length)];
  openModal(`<p>${randomPoem}</p>`);
}

function showRandomComment() {
  const randomComment = comments[Math.floor(Math.random() * comments.length)];
  openModal(`<p>${randomComment}</p>`);
}

function showLetter() {
  openModal(`<p>${letter}</p>`);
}

function runFlowerAnimation() {
  openModal(`<p>🌸 Flowers are blooming everywhere! Still in progress :/ 🌸</p>`);
}
function showRandomCatPicture() {
const randomCatPicture = catPictures[Math.floor(Math.random() * catPictures.length)];
openModal(`<img src="${randomCatPicture}" alt="Willie">`);
}

function updateLoveStoryModal() {
  const storyPicture = loveStoryPictures[loveStoryIndex];
  const popupContent = `
    <div id="storyContent">
      <img src="${storyPicture.src}" alt="Love Story">
      <div id="captionArea">${storyPicture.caption}</div>
      <div class="navigation-buttons">
        <button class="arrow-btn" onclick="prevLoveStory()">⬅️ Previous</button>
        <button class="arrow-btn" onclick="nextLoveStory()">➡️ Next</button>
      </div>
    </div>
  `;
  openModal(popupContent);
}

function startLoveStory() {
  loveStoryIndex = 0; // Start from the first story image
  updateLoveStoryModal();
}

function nextLoveStory() {
  loveStoryIndex = (loveStoryIndex + 1) % loveStoryPictures.length; // Loop back to the start
  updateLoveStoryModal();
}

function prevLoveStory() {
  loveStoryIndex = (loveStoryIndex - 1 + loveStoryPictures.length) % loveStoryPictures.length; // Loop back to the end
  updateLoveStoryModal();
}

function closeModal() {
  document.getElementById('popupModal').style.display = 'none';
}
function closeApp() {
// Simulates app exit (can close browser tab or window)
if (confirm("Are you sure you want to close the app?")) {
  window.close(); 
}
}
