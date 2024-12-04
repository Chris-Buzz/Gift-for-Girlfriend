const images = [
  'assets/us.png',
  'assets/image2.jpg',
  'assets/image3.jpg'
];

const poems = [
  "Love is so fragile,\n It can be calm, ",
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

let lastRandomImage = null;
function showRandomImage() {
  let randomImage;
  do{
    randomImage = images[Math.floor(Math.random() * images.length)];
  }while (randomImage === lastRandomImage);
  lastRandomImage = randomImage;
  const imageElement = document.getElementById('profile');
  imageElement.src = randomImage;
}

let lastPoem = null;
function showRandomPoem() {
  let randomPoem;
  do{
    randomPoem = poems[Math.floor(Math.random() * poems.length)];
  }while (randomPoem === lastPoem);
  lastPoem = randomPoem;
  openModal(`<p>${randomPoem}</p>`);
  
  const popupContent = `
    <div id="modal-content">
    <p>${randomPoem}</p>
      <div class="navigation-buttons">
        <button class="regenerate-btn" onclick="showRandomPoem()">↻</button>
      </div>
    </div>
  `;
  openModal(popupContent);
}

let lastComment = null;
function showRandomComment() {
  let randomComment;
  do{
    randomComment = comments[Math.floor(Math.random() * comments.length)];
  }while (randomComment === lastComment);
  lastComment = randomComment;
  
  const popupContent = `
    <div id="modal-content">
    <p>${randomComment}</p>
      <div class="navigation-buttons">
        <button class="regenerate-btn" onclick="showRandomComment()">↻</button>
      </div>
    </div>
  `;
  openModal(popupContent);
}

function showLetter() {
  openModal(`<p>${letter}</p>`);
}

function runFlowerAnimation() {
  const popupContent = document.getElementById('popupContent');
  popupContent.innerHTML = `
    <iframe 
      src="assets/FlowerAnimation/index.html" 
      frameborder="0" 
      
      style="width: 100%; height: 600px; border-radius: 10px;">
    </iframe>
  `;
  document.getElementById('popupModal').style.display = 'flex';
}


let lastCatPicture = null;
function showRandomCatPicture() {
  let randomCatPicture
  do{
    randomCatPicture = catPictures[Math.floor(Math.random() * catPictures.length)];
  }while (randomCatPicture === lastCatPicture);
  lastCatPicture = randomCatPicture;

const popupContent = `
    <div id="modal-content">
    <img src="${randomCatPicture}" alt="Willie">
      <div class="navigation-buttons">
        <button class="regenerate-btn" onclick="showRandomCatPicture()">↻</button>
      </div>
    </div>
  `;
  openModal(popupContent);
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
  if (loveStoryIndex != 2){
    loveStoryIndex = (loveStoryIndex + 1) % loveStoryPictures.length; // Loop back to the start
    updateLoveStoryModal();
  }
}

function prevLoveStory() {
  if (loveStoryIndex != 0){
    loveStoryIndex = (loveStoryIndex - 1 + loveStoryPictures.length) % loveStoryPictures.length; // Loop back to the end
    updateLoveStoryModal();
  }
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