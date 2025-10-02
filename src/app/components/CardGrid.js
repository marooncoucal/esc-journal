'use client';

import React from 'react';
import Card from './Card';
import { Image_URL } from '../imageURLdeploy';

export default function CardGrid({ filterTag = null }) {
  const cards = [
    {
      image: '/img_2304.png',
      title: '«ИЗ ШКАФА В СТУДИЮ»: НАЧАЛО ПУТИ',
      description: 'НЕРАСКРЫТЫЕ ТАЛАНТЫ',
      tag: 'НОВОЕ',
      link: '/articles/iz-shkafa-v-studiyu',
      blendMode: 'soft-light'
    },
    {
      image: '/ameli_1.png',
      title: 'ТВОРЧЕСКИЙ КОВЧЕГ В МИРЕ ИСКУССТВА',
      description: 'ДИАЛОГИ ПОКОЛЕНИЙ',
      tag: 'ФОТОРЕПОРТАЖ',
      link: '/article3',
      hoverTextColor: "green",
      hoverOverlayColor: 'green'
    },
    {
      image: '/ig_1.jpg',
      title: 'ДВИЖЕНИЕ – ЭТО СВОБОДА',
      description: 'ЖИЗНЬ ПОСЛЕ ДИПЛОМА',
      tag: 'НОВОЕ',
      link: '/article6',
      hoverTextColor: "yellow",
      hoverOverlayColor: 'yellow'
    },
    {
      image: '/1.1.png',
      title: 'ИСПЫТАНИЯ, КОТОРЫЕ ЗАКАЛЯЮТ ЧЕМПИОНОВ',
      description: 'УСПЕХ ИЛИ ПРОВАЛ',
      tag: 'НОВОЕ',
      link: '/article2',
      hoverTextColor: "violet",
      hoverOverlayColor: 'violet'
    },
    {
      image: '/masha_1.png',
      title: 'КОГДА ДИЗАЙН — ЭТО НЕ ПРОФЕССИЯ, А СПОСОБ ЖИТЬ',
      description: 'УСПЕХ ИЛИ ПРОВАЛ',
      tag: 'НОВОЕ',
      link: '/article4',
      hoverTextColor: "violet",
      hoverOverlayColor: 'violet'
    },
    {
      image: '/IMG_7630.JPG',
      title: 'ДОЛГИЙ ПУТЬ К ПРОСТЫМ ИСТИНАМ',
      description: 'ЖИЗНЬ ПОСЛЕ ДИПЛОМА',
      tag: 'НОВОЕ',
      link: '/article5',
      hoverTextColor: "yellow",
      hoverOverlayColor: 'yellow'
    },
    {
      image: '/IMG_polina.png',
      title: 'СКОРОТЕЧНОСТЬ МОМЕНТА В ОБЪЕКТИВЕ',
      description: 'НЕРАСКРЫТЫЕ ТАЛАНТЫ',
      tag: 'НОВОЕ',
      link: '/article7',
      blendMode: 'overlay'
    },
    {
      image: '/ame_1.png',
      title: 'В ПОИСКАХ ИСКРЕННОСТИ: ПУТЕШЕСТВИЕ ФОТОГРАФА',
      description: 'НЕРАСКРЫТЫЕ ТАЛАНТЫ',
      tag: 'ФОТОРЕПОРТАЖ',
      link: '/article8',
      blendMode: 'overlay'
    },
    {
      image: '/nast_1.png',
      title: 'ПУТЬ К СВОБОДЕ: КРЕАТИВ МЕНЯЕТ МИР',
      description: 'ЖИЗНЬ ПОСЛЕ ДИПЛОМА',
      tag: 'НОВОЕ',
      link: '/article9',
      hoverTextColor: "yellow",
      hoverOverlayColor: 'yellow'
    },
    {
      image: '/nast_.png',
      title: 'Носимое искусство ',
      description: 'ЖИЗНЬ ПОСЛЕ ДИПЛОМА',
      tag: 'НОВОЕ',
      link: '/article10',
      hoverTextColor: "yellow",
      hoverOverlayColor: 'yellow'
    },
  ];

  const filteredCards = filterTag
    ? cards.filter((card) => card.description === filterTag)
    : cards;

  // return (
  //   <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-0">
  //     {filteredCards.map((card, index) => (
  //       <Card
  //         key={index}
  //         image={Image_URL+card.image}
  //         title={card.title}
  //         description={card.description}
  //         tag={card.tag}
  //         link={card.link}
  //         hoverTextColor={card.hoverTextColor}
  //         hoverOverlayColor={card.hoverOverlayColor}
  //         blendMode={card.blendMode} 
  //       />
  //     ))}
  //   </div>
  // );
  return (
  <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-0">
    {filteredCards.map((card, index) => (
      <Card
        key={index}
        image={Image_URL+card.image}
        title={card.title}
        description={card.description}
        tag={card.tag}
        link={card.link}
        hoverTextColor={card.hoverTextColor}
        hoverOverlayColor={card.hoverOverlayColor}
        blendMode={card.blendMode}
      />
    ))}
  </div>
);
}

// 'use client';

// import React from 'react';
// import Card from './Card';

// export default function CardGrid() {
//   const cards = [
    
//     {
//       image: '/img_2304.png',
//       title: '«ИЗ ШКАФА В СТУДИЮ»: НАЧАЛО ПУТИ',
//       description: 'НЕРАСКРЫТЫЕ ТАЛАНТЫ',
//       tag: 'НОВОЕ',
//       link: '/articles/iz-shkafa-v-studiyu',
//       blendMode: 'soft-light'
//     },
//     {
//       image: '/ameli_1.png',
//       title: 'ТВОРЧЕСКИЙ КОВЧЕГ В МИРЕ ИСКУССТВА',
//       description: 'ДИАЛОГИ ПОКОЛЕНИЙ',
//       tag: 'ФОТОРЕПОРТАЖ',
//       link: '/article3',
//       hoverTextColor: "green",
//       hoverOverlayColor: 'green'
//     },
//     {
//       image: '/ig_1.jpg',
//       title: 'ДВИЖЕНИЕ – ЭТО СВОБОДА',
//       description: 'ЖИЗНЬ ПОСЛЕ ДИПЛОМА',
//       tag: 'НОВОЕ',
//       link: '/article6',
//       hoverTextColor: "yellow",
//       hoverOverlayColor: 'yellow'
//     },
//     {
//       image: '/1.1.png',
//       title: 'ИСПЫТАНИЯ, КОТОРЫЕ ЗАКАЛЯЮТ ЧЕМПИОНОВ',
//       description: 'УСПЕХ ИЛИ ПРОВАЛ',
//       tag: 'НОВОЕ',
//       link: '/article2',
//       hoverTextColor: "violet",
//       hoverOverlayColor: 'violet'
//     },
//     {
//       image: '/masha_1.png',
//       title: 'КОГДА ДИЗАЙН — ЭТО НЕ ПРОФЕССИЯ, А СПОСОБ ЖИТЬ',
//       description: 'УСПЕХ ИЛИ ПРОВАЛ',
//       tag: 'НОВОЕ',
//       link: '/article4',
//       hoverTextColor: "violet",
//       hoverOverlayColor: 'violet'
//     },
//     {
//       image: '/IMG_7630.JPG',
//       title: 'ДОЛГИЙ ПУТЬ К ПРОСТЫМ ИСТИНАМ',
//       description: 'ЖИЗНЬ ПОСЛЕ ДИПЛОМА',
//       tag: 'НОВОЕ',
//       link: '/article5',
//       hoverTextColor: "yellow",
//       hoverOverlayColor: 'yellow'
//     },
//     {
//       image: '/IMG_polina.png',
//       title: 'СКОРОТЕЧНОСТЬ МОМЕНТА В ОБЪЕКТИВЕ',
//       description: 'НЕРАСКРЫТЫЕ ТАЛАНТЫ',
//       tag: 'НОВОЕ',
//       link: '/article7',
//       blendMode: 'overlay'
//     },
//     {
//       image: '/ame_1.png',
//       title: 'В ПОИСКАХ ИСКРЕННОСТИ: ПУТЕШЕСТВИЕ ФОТОГРАФА',
//       description: 'НЕРАСКРЫТЫЕ ТАЛАНТЫ',
//       tag: 'ФОТОРЕПОРТАЖ',
//       link: '/article8',
//       blendMode: 'overlay'
//     },
//     {
      
//       image: '/nast_1.png',
//       title: 'ПУТЬ К СВОБОДЕ: КРЕАТИВ МЕНЯЕТ МИР',
//       description: 'ЖИЗНЬ ПОСЛЕ ДИПЛОМА',
//       tag: 'НОВОЕ',
//       link: '/article9',
//       hoverTextColor: "yellow",
//       hoverOverlayColor: 'yellow'
//     },
    
//   ];

//   return (
//     <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-0">
//       {cards.map((card, index) => (
//         <Card
//           key={index}
//           image={Image_URL+card.image}
//           title={card.title}
//           description={card.description}
//           tag={card.tag}
//           link={card.link}
//           hoverTextColor={card.hoverTextColor}
//           hoverOverlayColor={card.hoverOverlayColor}
//           blendMode={card.blendMode} 
//         />
//       ))}
//     </div>
//   );
// }