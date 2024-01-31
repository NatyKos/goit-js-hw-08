const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url:
      'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url:
      'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url:
      'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];
const gallery = document.querySelector('.gallery');

function createGallery(url, alt) {
  const newLi = `<li><img src = '${url}' alt = "${alt}"></li>`;
  return newLi;
}
let newList = '';
for (let image of images) {
  newList += createGallery(image.url, image.alt);  
}
gallery.innerHTML = newList;

// неефективний метод:
// images.forEach((image) => {
//   const newLi = document.createElement('li');
//   gallery.append(newLi);
//   const newImg = document.createElement('img');
//   newImg.setAttribute('src', image.url);
//   newImg.setAttribute('alt', image.alt);
//   newLi.append(newImg);
//   newLi.style.listStyle = 'none'; 
//   newImg.style.width = '360px'
//   newImg.style.height= '300px'
// })
