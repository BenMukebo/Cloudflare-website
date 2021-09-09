const data = [
  {
    id: 1,
    name: 'Albert Noah',
    images: {
      img: '../images/member1.png',
      alt: 'team_1',
    },
    about: 'President Gen. of Cloudflare Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 2,
    name: 'Albert Noah',
    images: {
      img: '../images/member2.png',
      alt: 'team_2',
    },
    about: 'President Gen. of Cloudflare Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 3,
    name: 'Albert Noah',
    images: {
      img: '../images/member3.png',
      alt: 'team_3',
      },
    about: 'President Gen. of Cloudflare Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 4,
    name: 'Albert Noah',
    images: {
        img: '../images/member4.png',
        alt: 'team_4',
      },
    about: 'President Gen. of Cloudflare Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 5,
    name: 'Albert Noah',
    images: {
      img: '../images/member3.png',
      alt: 'team_3',
    },
    about: 'President Gen. of Cloudflare Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  },
  {
    id: 6,
    name: 'SohYeong Noh',
    images: {
      img: '../images/member6.png',
      alt: 'team_6',
    },
    about: 'Head Manager of designers Company.',
    work: 'Lorem ipsum, consectetur adipisicing elit.Perferendis asperiores, quo distinctio, atque, quasi nobis.',
  }, 
];

const htmls = document.getElementsByTagName('html')[0];
const teamContainer = document.querySelector('#Team .teams');

// Implementing the Flex card dynamically

function createCard(dataInfo) {
  const li = document.createElement('li');
    li.className = 'card d-flex';
    li.innerHTML = `<div class="card-img">
    <img src="${dataInfo.images.img}" alt="${dataInfo.images.alt}">
  </div>
  <div class="card-body">
    <h3>${dataInfo.name}</h3>
    <h4>${dataInfo.about}</h4>
    <p>${dataInfo.work}</p>
  </div>`;
    return li;
  }
  