const cardsContainer = document.querySelector('.card-container');

const domains = [
  { name: 'NOVEL', image: 'novel.jpg',link: 'novel.html'},
  { name: 'BIOGRAPHY', image: 'Biography.jpg',link: 'bio.html' },
  // { name: 'PROGRAMMING', image: 'programming.jpg' ,link: 'pgmg.html'},
  // { name: 'PHYSICS', image: 'phy.jpg',link: 'phy.html' },
  // { name: 'HISTORY', image: 'history.jpg',link: 'his.html' },
  { name: 'ASTRONOMY', image: 'astronomy.jpg',link: 'ast.html' },
];

domains.forEach((domain) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = domain.image;
  image.alt = domain.name;

  const heading = document.createElement('h2');
  heading.textContent = domain.name;

  card.appendChild(image);
  card.appendChild(heading);

  card.addEventListener('click', () => {
    window.location.href = domain.link;
  });

  cardsContainer.appendChild(card);
});
