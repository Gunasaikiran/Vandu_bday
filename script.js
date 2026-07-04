const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const glow = $('.cursor-glow');
document.addEventListener('mousemove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

// ================= MUSIC =================

const musicBtn = $('#musicBtn');
const bgMusic = $('#bgMusic');

// Which song should play on which page
const pageMusic = {
  "index.html": "assets/Music/Home.mp3",
  "memories.html": "assets/Music/Memories.mp3",
  "reasons.html": "assets/Music/Reasons.mp3",
  "letter.html": "assets/Music/Letter_bgm.mp3",
  "cake.html": "assets/Music/Cake.mp3",
  "final.html": "assets/Music/Final.mp3"
};

// Detect current page
let currentPage = window.location.pathname.split("/").pop();

if (currentPage === "") {
  currentPage = "index.html";
}

// Set music automatically
if (bgMusic && pageMusic[currentPage]) {
  bgMusic.src = pageMusic[currentPage];
  bgMusic.volume = 0.35;
}

// Restore previous music state
if (localStorage.getItem("musicPlaying") === "true") {
  bgMusic.play().catch(() => {});
  musicBtn.textContent = "♫";
  musicBtn.classList.add("playing");
}

// Play / Pause
musicBtn?.addEventListener("click", () => {

  if (bgMusic.paused) {

    bgMusic.play();

    musicBtn.classList.add("playing");
    musicBtn.textContent = "♫";

    localStorage.setItem("musicPlaying", "true");

  } else {

    bgMusic.pause();

    musicBtn.classList.remove("playing");
    musicBtn.textContent = "♪";

    localStorage.setItem("musicPlaying", "false");
  }

});

const birthdayDate = new Date('2026-07-13T00:00:00').getTime();
function updateCountdown() {
  const countdown = $('#countdown');
  if (!countdown) return;

  const difference = Math.max(birthdayDate - Date.now(), 0);
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  $('#days').textContent = String(days).padStart(2, '0');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#mins').textContent = String(minutes).padStart(2, '0');
  $('#secs').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const reasons = [
  'Your smile feels like sunshine.',
  'You make people feel safe.',
  'Your laugh is unforgettable.',
  'You turn simple days into stories.',
  'You care deeply.',
  'Your vibe is soft and magical.',
  'You are beautifully genuine.',
  'You make memories feel golden.',
  'Your heart is rare.',
  'You are my favorite person to annoy.',
  'You glow without trying.',
  'You make everything better.',
  'You listen like home.',
  'You are effortlessly classy.',
  'You deserve the prettiest life.',
  'You are a whole comfort place.',
  'Your presence feels peaceful.',
  'You are pure main character energy.',
  'You make friendship feel precious.',
  'You are loved more than words.',
  'You bring calm into chaos.',
  'You make every photo feel special.',
  'You have the cutest little habits.',
  'You make boring days memorable.',
  'You are gentle but strong.',
  'Your friendship feels like a blessing.',
  'You understand things without words.',
  'You make silence feel comfortable.',
  'You are a walking soft glow.',
  'You make people believe in kindness.',
  'You are so easy to love.',
  'You make celebrations feel brighter.',
  'You carry warmth wherever you go.',
  'You make tiny moments feel cinematic.',
  'You have a beautiful soul.',
  'You make me laugh at random times.',
  'You are honest in the sweetest way.',
  'You are my comfort notification.',
  'You make the world less heavy.',
  'You deserve flowers every day.',
  'You make love feel simple.',
  'You are soft, rare, and precious.',
  'You make every plan more exciting.',
  'You are naturally elegant.',
  'You care even when nobody notices.',
  'You are full of pretty energy.',
  'You make friendship feel magical.',
  'You are the reason behind many smiles.',
  'You make ordinary chats memorable.',
  'You are a safe place.',
  'You look beautiful being yourself.',
  'You make every goodbye feel hard.',
  'You are thoughtful in little ways.',
  'You make life feel warmer.',
  'You are my favorite kind of person.',
  'You make memories worth saving.',
  'You are sunshine with a little drama.',
  'You make birthdays feel meaningful.',
  'You are a beautiful chapter.',
  'You make every corner feel like home.',
  'You are cute without even trying.',
  'You have the prettiest heart.',
  'You make people feel noticed.',
  'You bring sparkle into simple things.',
  'You are love in human form.',
  'You make every story better.',
  'You are someone I am grateful for.',
  'You make emotions feel safe.',
  'You have a rare kind of grace.',
  'You make the day softer.',
  'You are a forever kind of friend.',
  'You make everyone around you happier.',
  'You are pure golden-hour energy.',
  'You make small surprises feel huge.',
  'You are beautifully dramatic sometimes.',
  'You make life feel like a cute vlog.',
  'You are my favorite memory keeper.',
  'You make even chaos look pretty.',
  'You are special in every season.',
  'You make me proud to know you.',
  'You carry love in your details.',
  'You make every laugh feel louder.',
  'You are a little universe of warmth.',
  'You make everything feel less lonely.',
  'You are rare, real, and radiant.',
  'You make wishes feel possible.',
  'You are the prettiest comfort zone.',
  'You make every message feel sweet.',
  'You turn moments into keepsakes.',
  'You are always worth celebrating.',
  'You make kindness look beautiful.',
  'You are a blessing in soft colors.',
  'You make every page of life prettier.',
  'You are deeply loved.',
  'You make my heart smile.',
  'You deserve all the magic.',
  'You make today feel golden.',
  'You are unforgettable.',
  'You are my favorite birthday girl.',
  'You are more loved than 100 reasons can say.'
];

// const reasonGrid = $('#reasonGrid');
// if (reasonGrid) {
//   const imageFolder = reasonGrid.dataset.imageFolder || 'assets';
//   const reasonImages = Array.from({ length: 100 }, (_, index) => `${imageFolder}/${index + 1}.jpg`);

//   reasonGrid.innerHTML = reasons
//     .map((reason, index) => {
//       const image = reasonImages[index % reasonImages.length];
//       return `
//       <article class="reason-card reveal" tabindex="0">
//         <div class="reason-inner">
//           <div class="reason-front">
//             <h3>${index + 1}</h3>
//             <p>tap love note</p>
//           </div>
//           <div class="reason-back" style="background-image: linear-gradient(to bottom, rgba(62,50,50,.08), rgba(62,50,50,.18) 45%, rgba(62,50,50,.78)), url('${image}');">
//             <p>${reason}</p>
//           </div>
//         </div>
//       </article>`;
//     })
//     .join('');
// }
const reasonGrid = $('#reasonGrid');

if (reasonGrid) {
  const imageFolder = reasonGrid.dataset.imageFolder || 'assets/devil';
  const reasonImages = Array.from(
    { length: 100 },
    (_, index) => `${imageFolder}/pic${index + 1}.jpeg`
  );

  reasonGrid.innerHTML = reasons
    .map((reason, index) => {
      const image = reasonImages[index % reasonImages.length];

      return `
      <article class="reason-card reveal" tabindex="0">
        <div class="reason-inner">
          <div class="reason-front">
            <h3>${index + 1}</h3>
            <p>tap love note</p>
          </div>
          <div class="reason-back" style="background-image: linear-gradient(to bottom, rgba(62,50,50,.08), rgba(62,50,50,.18) 45%, rgba(62,50,50,.78)), url('${image}');">
            <p>${reason}</p>
          </div>
        </div>
      </article>`;
    })
    .join('');
}
$('#randomReasonBtn')?.addEventListener('click', () => {
  $('#randomReason').textContent = reasons[Math.floor(Math.random() * reasons.length)];
});

const envelope = $('#envelope');
const letterText = `You are one of those rare people who make the world feel a little brighter just by being in it. ✨ Your presence brings warmth, peace, happiness, and a kind of comfort that words can never fully explain.

On your birthday, I just want you to know how much you mean to me. 🌸 You deserve happiness that feels real, dreams that slowly turn into reality, and moments so beautiful that your heart wants to hold onto them forever.

నువ్వు నా జీవితంలోకి వచ్చిన తర్వాత చాలా మంచి జ్ఞాపకాలు ఏర్పడ్డాయి. 😊 నీ నవ్వు, నీ మాటలు, నీ caring nature, ఇవన్నీ నిన్ను చాలా special గా చేస్తాయి. నువ్వు ఎప్పుడూ ఇలానే నవ్వుతూ, సంతోషంగా ఉండాలని మనస్ఫూర్తిగా కోరుకుంటున్నాను. 💫

I hope this year gives you peaceful mornings ☀️, beautiful sunsets 🌅, unexpected smiles 😊, and countless reasons to be proud of yourself. May every challenge make you stronger, every success make you happier, and every day remind you how amazing you truly are.

నీ కలలు ఒక్కొక్కటిగా నిజం కావాలి. 🌈 నువ్వు కోరుకున్న happiness, success, peace అన్నీ నీకు దక్కాలి. ఎందుకంటే నువ్వు నిజంగా వాటన్నింటికీ అర్హురాలు. 🌷

Happy Birthday Babuuuuuuuuuuu 🎂🎉💖

And yes... nuvve naa Mahesh Babu. 😌✨

Thank you for all the laughs 😂, all the random conversations 📞, all the memories 📸, and for being the wonderful person that you are. Some people enter our lives and become memories, but a few become chapters. You are one of my favorite chapters. 🤍

Never forget how special you are. 🌟 Even on days when you doubt yourself, remember that there are people who genuinely care about you and want to see you happy.

One last thing...

I love you as a friend. 🫶❤️

Thank you for being one of the most important people in my life. No matter where life takes us, I will always be grateful for our friendship and for all the memories we've shared together.

Wishing you a day filled with love, laughter, cake, happiness, and everything your heart desires. 🎂🎈🎊✨

Happy Birthday once again, Babuu. 💖

With lots of love and best wishes,
Your Sunny 🌸
`;
let hasTypedLetter = false;

envelope?.addEventListener('click', () => {
  envelope.classList.add('open');
  if (hasTypedLetter) return;

  hasTypedLetter = true;
  let index = 0;
  const typedLetter = $('#typedLetter');
  const typing = setInterval(() => {
    typedLetter.textContent += letterText[index] || '';
    index += 1;
    if (index > letterText.length) clearInterval(typing);
  }, 35);
});

const cake = $('#birthdayCake') || $('.cake');
const cutCakeBtn = $('.cut-cake-btn');
const cakeStageText = $('#cakeStageText');
let cakeAnimationStarted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

cutCakeBtn?.addEventListener('click', async () => {
  if (!cake || cakeAnimationStarted) return;

  cakeAnimationStarted = true;
  cutCakeBtn.disabled = true;

  cakeStageText.textContent = 'blowing the candles... 🌬️';
  cutCakeBtn.textContent = 'Blowing Candles...';
  cake.classList.add('blow');
  await wait(1500);

  cakeStageText.textContent = ' cake is cutting 🔪';
  cutCakeBtn.textContent = '';
  cake.classList.add('knife-in');
  await wait(1200);

  cakeStageText.textContent = ' into a slice... 🍰';
  cutCakeBtn.textContent = 'Cutting Slice...';
  cake.classList.add('sliced');
  await wait(900);

  cakeStageText.textContent = 'first slice is for my devil,  my Vandu, my bestieee, my best frnduuuuuu, my aunty, my sweety, my little Lilliput, my favorite person, and my everything. 🥰🎂❤️';
  cutCakeBtn.textContent = 'Cake Cut 🎉';

  if (typeof confetti === 'function') {
    confetti({ particleCount: 280, spread: 115, origin: { y: 0.62 } });
  }
});
