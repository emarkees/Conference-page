// hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('menuaction')
  .forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));

// More menu
const chevron = document.getElementById('showMore');
const allSpeakers = document.getElementById('speaker-details');
const moreBttn = document.querySelector('.more-btn');

chevron.addEventListener('click', () => {
  chevron.classList.toggle('active');
  allSpeakers.classList.toggle('active');

  if (moreBttn.innerHTML === 'More') {
    moreBttn.innerHTML = 'less';
  } else {
    moreBttn.innerHTML = 'more';
  }
});

// Data

const details = [
  {
    grid: 1,
    id: 0,
    name: 'Yochai Benkler',
    speakerProfession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerBiography: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    featuredImage: './assets/images/speaker1.svg',
  },
  {
    grid: 2,
    id: 1,
    name: 'SohYeong Noh',
    speakerProfession: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerBiography: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    featuredImage: './assets/images/speaker2.svg',
  },
  {
    grid: 1,
    id: 2,
    name: 'Yochai Benkler',
    speakerProfession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerBiography: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    featuredImage: './assets/images/speaker3.svg',
  },
  {
    grid: 2,
    id: 3,
    name: 'Yochai Benkler',
    speakerProfession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerBiography: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    featuredImage: './assets/images/speaker4.svg',
  },
  {
    grid: 1,
    id: 4,
    name: 'Yochai Benkler',
    speakerProfession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerBiography: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    featuredImage: './assets/images/speaker5.svg',
  },
  {
    grid: 2,
    id: 5,
    name: 'Yochai Benkler',
    speakerProfession: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    speakerBiography: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    featuredImage: './assets/images/speaker6.svg',
  },

];

const speakerSection = document.querySelector('.speaker-details');

let html = '';

details.forEach((data) => {
  html += `
    <div class='card-section' id='${data.id}'>
      <div class="speakers">
        <img src='${data.featuredImage}' alt="" class="speaker-img">        
        <div class="left-speaker-details">
          <div class="details">
            <h1 class="speaker-name primary-font">${data.name}</h1>
            <p class="about-speaker-dtls primary-font">${data.speakerProfession}</p>
          </div>
          <p class="about-speaker primary-font">${data.speakerBiography}</p>
        </div>
      </div>
    </div>
    `;
  speakerSection.innerHTML = html;
});