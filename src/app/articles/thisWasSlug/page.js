'use client';

import Image from 'next/image';
import CardGrid from '@/app/components/CardGrid';
import ArticleMainBlock from '@/app/components/ArticleMainBlock';
import { Image_URL } from '@/app/imageURLdeploy';


export default function ArticlePage() {
  return (
    <div className="bg-white overflow-x-hidden text-black">
       <ArticleMainBlock
        image="/img_2304.png" // пикча 
        bgColor="pink"  // цвет фона всего блока pink yellow violet green black
        textColor="white" // цвет текста контент-части, тег и не должен меняться епрст! pink yellow violet green black white
        title="«ИЗ ШКАФА В СТУДИЮ»: КАК ГОЛОСОВЫЕ НА ПРИКОЛЕ СТАЛИ НАЧАЛОМ МУЗЫКАЛЬНОГО ПУТИ" //лид статьи
        category="НЕРАСКРЫТЫЕ ТАЛАНТЫ" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="НОВОЕ" // текст тега
        reverse={false} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />


      <section className="bg-white pt-20 pb-24 px-4">
        <p className="mb-5 font-bold text-[18px] md:text-[21px] max-w-screen-md mx-auto">
          Таланты редко появляются из ниоткуда. история нашего героя — как раз тот случай, когда творчество возникает спонтанно, а перерастает в настоящее музыкальное высказывание.
        </p>

        <p className="mb-[82px] text-[16px] max-w-screen-md mx-auto">
          Этот парень не проходил музыкальных школ, не играл с детства на скрипке, и тем не менее — пишет музыку, записывает треки, вдохновляется улицами, книгами и западным флоу.
        </p>

        <Image
          className="mb-[82px] w-full md:max-w-[720px] mx-auto"
          src={Image_URL+"/martin_2.png"}
          alt="Описание изображения"
          width={720}
          height={720}
        />

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FF1468" />
          </svg>
        </div>

        <p className="mb-[60px] text-center italic text-[#FF1468] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Меня вдохновил друг — гитарист. Он писал инструменталы в жанре пост-панк, а я в ответ слал ему шуточные голосовые. Напевал, прикалывался, просто выпивал и пел, — рассказывает он. Но его реакция изменила всё: несмотря на весь мой несерьёзный подход, ему действительно нравилось, как это звучит. Так начался мой путь»
        </p>



        <p className="mb-[82px] text-[16px] max-w-screen-md mx-auto">
          Сначала он подстраивался под постпанк — потому что это то, что умел делать друг. Потом — стал искать свои звуки. Скачивал с YouTube хип-хоп и поп-инструменталы, записывался в шкафу под одеялом. Без техники, без студии, просто изнутри — потому что пелось. Уже позже появились оборудование и домашняя студия.
        </p>

        <Image
          className="mb-[82px] w-full"
          src={Image_URL+"/martin_3.png"}
          alt="Описание изображения"
          width={1920}
          height={720}
        />

        <p className="mb-[12px] text-[16px] max-w-screen-md mx-auto">
          Музыкальное вдохновение приходит к нему неожиданно. «Иду по улице, вспоминаю фразу, которую кто‑то когда‑то сказал. Если она зацепила — в голове тут же строится четверостишие. Или читаю нон-фикшн, натыкаюсь на концептуальное слово — и начинаю рифмовать вокруг него. Музыка — это не столько знания, сколько отклик. Щелчок внутри».
        </p>

        <p className="mb-[82px] text-[16px] max-w-screen-md mx-auto">
          Он может напевать строчку в десятках разных манер, пока не найдёт нужную мелодию. Иногда мелодии просто возникают в голове: «Это как будто ты видишь сон. Только не глазами, а ушами. Не знаю, насколько это нормально, но я так живу». Сначала рождаются звуки, потом — текст. Или наоборот: заметка из телефона обретает звучание. Всё происходит хаотично и естественно. Шизофренично — как он сам это называет, но зато искренне.
        </p>

        <Image
          className="mb-[82px] w-full md:max-w-[720px] mx-auto"
          src={Image_URL+"/martin_4.png"}
          alt="Описание изображения"
          width={720}
          height={720}
        />

        <p className="mb-[12px] text-[16px] max-w-screen-md mx-auto">
          Главная проблема, по его словам, — это сомнения: «В моменте кажется, что написал шедевр. А на следующий день — будто это полное говно. И так всегда. С этим приходится просто жить».
        </p>

        <p className="mb-[82px] text-[16px] max-w-screen-md mx-auto">
          Одна из немногих песен, которой он по‑настоящему гордится — «ЧБ-фильтр». Название отсылает к теории двойного сознания (double consciousness) из книги The Souls of Black Folk, о внутреннем конфликте между принадлежностью к одному народу и необходимостью жить по правилам другого. В песне он осмысляет это чувство — ощущение человека, который смотрит на мир через чужую линзу. Или чужой фильтр.
        </p>

        <Image
          className="mb-[82px] w-full md:max-w-[720px] mx-auto"
          src={Image_URL+"/martin_5.png"}
          alt="Описание изображения"
          width={720}
          height={720}
        />

        <p className="mb-[12px] text-[16px] max-w-screen-md mx-auto">
          Он говорит, что не считает музыку инструментом перемен в обществе — скорее, отражением происходящего. Но при этом уверен: музыка может быть точкой контакта с чем‑то глубинным, почти метафизическим. «Это как любовь или природа. Что‑то, что напрямую касается твоей души».
        </p>

        <p className="mb-[82px] text-[16px] max-w-screen-md mx-auto">
          Сегодня у него уже есть собственная студия. Друг, с которого всё начиналось, учится на звукорежиссёра. Их музыка становится всё сложнее и профессиональнее. Но путь всё тот же — от внутреннего импульса к звуку.
        </p>

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FF1468" />
          </svg>
        </div>

        <p className="mb-[100px] text-center italic text-[#FF1468] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Музыкант — это не тот, кто знает ноты. Это тот, кто может идти по улице и в голове слышать целую песню. Такую, которой ещё нет. И если ты её слышишь — значит, ты уже музыкант».
        </p>

        <Image
          className="mb-[82px] w-full md:max-w-[720px] mx-auto"
          src={Image_URL+"/martin_6.png"}
          alt="Описание изображения"
          width={720}
          height={720}
        />

        <p className="mb-[20px] text-[16px] max-w-screen-md mx-auto">
          А ещё — герой советует не бояться воровать. В хорошем смысле. «Ты берёшь стиль вокала у одного, инструментал у другого, ритмику у третьего — и собираешь из этого своё. Это честно. Потому что это ты. Такой микс из твоей базы данных, которую ты копишь в голове. Со временем ты всё равно начнёшь создавать по‑своему».
        </p>

        <p className="mb-[60px] text-[16px] max-w-screen-md mx-auto">
          Мартин мечтает о сцене, о признании, о том, чтобы зарабатывать на музыке и никогда не работать «в классическом смысле». Мечта не новая. Но когда её несёт человек с живым голосом, у которого всё началось с прикола и шкафа под одеялом, — в неё хочется верить.
        </p>

        <p className="mb-[100px] text-center w-[320px] text-[#FF1468] text-[20px] md:text-[16px] max-w-screen-md mx-auto">
          Мартин Асаре — музыкант, исполнитель, репер
          Студент Моушен дизайна 2024
          @as4r3
          Портфолио
        </p>
                
              </section>
    <div className="bg-black pt-14">
       <div>
             <h1 className="text-[#FF1468] mb-6 text-[32px] md:text-[65px] font-black leading-tight md:leading-[0.9] ml-4 md:ml-[24px]">
               ИЗ ЭТОЙ РУБРИКИ
               </h1>
         </div>
         <div className="bg-black"><CardGrid filterTag="НЕРАСКРЫТЫЕ ТАЛАНТЫ" /></div>
                               
            <div>
               <h1 className="text-[#FF1468] mt-24 mb-6 text-[32px] md:text-[65px] font-black leading-tight md:leading-[0.9] ml-4 md:ml-[24px]">
               ЧИТАЙ ТАКЖЕ
               </h1>
             </div>
          <div className="bg-black"><CardGrid></CardGrid></div>
     </div>

    </div>
  );
}


// export async function generateStaticParams() {
//   // Example: fetch list of article slugs from an API or local data source
//   const articles = await fetch('https://example.com/api/articles').then(res => res.json());

//   return articles.map(article => ({
//     slug: article.slug,
//   }));
// }
