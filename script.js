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

  if (moreBttn.innerHTML === 'LESS') {
    moreBttn.innerHTML = 'MORE';
  } else {
    moreBttn.innerHTML = 'LESS';
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
    name: 'Kilnam Chon',
    speakerProfession: '',
    speakerBiography: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    featuredImage: './assets/images/speaker2.svg',
  },
  {
    grid: 1,
    id: 2,
    name: 'Ju Mee-Yon',
    speakerProfession: 'Director of Art Centre Nabi and a board member of CC Korea',
    speakerBiography: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    featuredImage: './assets/images/speaker3.svg',
  },
  {
    grid: 2,
    id: 3,
    name: 'Julia Leda',
    speakerProfession: 'President of Young Pirates of Europe',
    speakerBiography: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July',
    featuredImage: './assets/images/speaker4.svg',
  },
  {
    grid: 1,
    id: 4,
    name: 'Lila tretikov',
    speakerProfession: 'Executive Director of the Wikimedia Foundation',
    speakerBiography: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
    featuredImage: './assets/images/speaker5.svg',
  },
  {
    grid: 2,
    id: 5,
    name: 'Ryan Merkley',
    speakerProfession: 'CEO of Creativve Commons, ex COO of the Mozilla Foundation',
    speakerBiography: 'He is an advocate for open licenses, net neutrality and open data initiatives in the public sector.',
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