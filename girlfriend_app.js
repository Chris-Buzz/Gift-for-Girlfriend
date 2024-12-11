const images = [
  'assets/us/us.png','assets/us/us2.png','assets/us/us3.jpg','assets/us/us4.jpg','assets/us/us5.jpg','assets/us/us6.jpg','assets/us/us7.jpg','assets/us/us8.jpg','assets/us/us9.jpg',
  'assets/us/us10.jpg','assets/us/us11.JPG', 'assets/us/us12.jpg','assets/us/us13.jpg','assets/us/us14.jpg','assets/us/us15.jpg','assets/us/us16.jpg','assets/us/us17.jpg','assets/us/us18.jpg',
  'assets/us/us19.jpg','assets/us/us20.jpg','assets/us/us21.jpg','assets/us/us22.jpg','assets/us/us23.jpg','assets/us/us24.jpg','assets/us/us25.jpg','assets/us/us26.jpg','assets/us/us27.jpg',
  'assets/us/us28.jpg','assets/us/us29.jpg','assets/us/us30.jpg','assets/us/us31.jpg','assets/us/us32.jpg','assets/us/us33.jpg','assets/us/us34.jpg','assets/us/us35.jpg','assets/us/us36.jpg',
  'assets/us/us37.jpg','assets/us/us38.jpg','assets/us/us39.jpg','assets/us/us40.jpg','assets/us/us41.jpg','assets/us/us42.jpg','assets/us/us43.jpg','assets/us/us44.jpg','assets/us/us45.jpg',
  'assets/us/us46.jpg','assets/us/us47.jpg','assets/us/us48.jpg','assets/us/us49.jpg','assets/us/us50.jpg','assets/us/us51.jpg','assets/us/us52.jpg','assets/us/us53.jpg','assets/us/us54.jpg',
  'assets/us/us55.jpg', 'assets/us/us56.jpg','assets/us/us57.jpg','assets/us/us58.jpg','assets/us/us59.jpg','assets/us/us60.jpg','assets/us/us61.jpg','assets/us/us62.jpg','assets/us/us63.jpg',
  'assets/us/us64.jpg','assets/us/us65.jpg','assets/us/us66.jpg','assets/us/us67.jpg','assets/us/us68.jpg','assets/us/us69.jpg'
];

const poems = [
  "Love is so fragile,\n It can be calm, ",
  "Forever in my heart, you shine brighter than any star.",
  "Every moment with you feels like a dream come true."
];

const comments = [
  "You are my favorite person","Babe you are so gorgeous ♡", "Your eyes light up my world ♡","I get lost in your eyes ♡", "You are so pretty ♡","I love you so much ♡","I love you to infinity and beyond ♡",
  "I am thinking of you right now ♡","Everytime I see you, you make me smile ♡", "You make me so happy ♡","I absolutely love cuddling with you ♡","You make me feel so safe and secure ♡","Your back rubs are heavenly ♡",
  "You are the most beautiful girl in the world ♡", "Are you a model? Well you should be ♡","You are my girl ♡", "You know who thinks your beautiful …. Me ♡", "You are the strongest person I know ♡", "I think your an angel from heaven ♡",
  "I dreamed about you last night ♡", "You are the best girlfriend in the world ♡", "I love your laugh ♡", "You are my sunshine on a cloudy day ♡", "Your smile melts my heart ♡", "You are my greatest treasure ♡", "I’m so lucky to have you in my life ♡",
  "You light up every room you walk into ♡", "You are my dream come true ♡", "I could stare at your beautiful face all day ♡", "Your laugh is my favorite sound ♡", "You’re my favorite person in the whole world ♡", "You are my reason to smile every day ♡",
  "You make my life so much brighter ♡","Every moment with you is magical ♡","You’re my everything ♡","I fall in love with you more every day ♡","Your beauty is unmatched ♡", "You have the most amazing heart ♡","You are the love of my life ♡",
  "Just hearing your voice makes my day ♡", "You’re my favorite adventure ♡", "I’m in awe of how amazing you are ♡","You are my forever and always ♡","I adore everything about you ♡","You make my world complete ♡", "You’re the most incredible person I’ve ever met ♡",
  "You are my greatest blessing ♡", "You’re my home ♡","You have the most beautiful soul ♡", "You make my heart skip a beat ♡","I cherish every moment with you ♡","You’re the best thing that’s ever happened to me ♡","I can’t imagine my life without you ♡",
  "You are my light in the dark ♡","You have the sweetest heart ♡","You make me want to be a better person ♡","I love everything about you ♡","You’re my favorite hello and hardest goodbye ♡", "You’re my partner in everything ♡","I could spend forever in your arms ♡",
  "You make every day special ♡","You’re the reason I believe in love ♡","You leave me speechless ♡","I feel like the luckiest person alive because I have you ♡","You make my heart so full ♡","You are my soulmate ♡", "I love you more than words can ever express ♡",
  "You are my best friend ♡","You are my twin fr  ♡ ", 
  
];
const catPictures = [
  'assets/animals/pet1.JPEG','assets/animals/pet2.JPEG','assets/animals/pet3.JPEG','assets/animals/pet4.JPEG','assets/animals/pet5.JPEG','assets/animals/pet6.JPEG',
  'assets/animals/pet7.jpg','assets/animals/pet8.jpg','assets/animals/pet9.jpg','assets/animals/pet10.jpg','assets/animals/pet11.jpg','assets/animals/pet12.jpg',
  'assets/animals/pet13.jpg','assets/animals/pet14.jpg','assets/animals/pet15.jpg','assets/animals/pet16.jpg','assets/animals/pet17.jpg','assets/animals/pet18.jpg',
  'assets/animals/pet19.jpg','assets/animals/pet20.jpg','assets/animals/pet21.jpg','assets/animals/pet22.jpg',
];

const loveStoryPictures = [
  { src: 'assets/story1.jpg', caption: 'The first picture that we have together' },




  
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
    console.log(randomImage)
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
