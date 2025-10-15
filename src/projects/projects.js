// const cardsUrl = '../images/cards/'; 
// const iconsUrl = '../src/images/icons/skills/'
// const projects = [
//       { name: 'Проект Aperture', description: 'Aperture', logo: `${cardsUrl}`, type: ['JavaScript', 'HTML5', 'Sass'], iconUrl: `${iconsUrl}html5` },
//     ];

//     const cardsContainer = document.querySelector('.project__cards');

//     projects.forEach(project => {
//       const cardItem = document.createElement('div');
//       cardItem.classList.add('card-item');

//       function generateTypeTags(types) {
//         return types.map(type => `<span class="type-tag">${type}</span>`).join('');
//       }

//       cardItem.innerHTML = `
//         <div class="card-item__logo d-flex">
//           <img src="${project.logo}" alt="${project.name}">
//         </div>
//         <div class="card-item__type d-flex">
//             ${generateTypeTags(project.type)}
//         </div>
//         <div class="card-item__content d-flex">
//           <h3>${project.name}</h3>
//           <p>${project.description}</p>
//         </div>
//       `;

//       cardsContainer.appendChild(cardItem);
//     });

//     const style = document.createElement('style');
//     document.head.appendChild(style);
