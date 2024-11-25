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
    'assets/story1.jpg',
    'assets/story2.jpg',
    'assets/story3.jpg'
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
    openModal(`<p>🌸 Flowers are blooming everywhere! 🌸</p>`);
  }

let loveStoryIndex = 0;

function showRandomCatPicture() {
  const randomCatPicture = catPictures[Math.floor(Math.random() * catPictures.length)];
  openModal(`<img src="${randomCatPicture}" alt="Willie">`);
}

function startLoveStory() {
  if (loveStoryIndex >= loveStoryPictures.length) {
    loveStoryIndex = 0; // Reset the story
  }
  const storyPicture = loveStoryPictures[loveStoryIndex];
  loveStoryIndex++;
  openModal(`<img src="${storyPicture}" alt="Love Story">`);
}

function closeApp() {
  // Simulates app exit (can close browser tab or window)
  if (confirm("Are you sure you want to close the app?")) {
    window.close(); 
  }
}