import Image from "next/image";
import CardGrid from "../components/CardGrid";
import ArticleMainBlock from "../components/ArticleMainBlock";
import { Image_URL } from "../imageURLdeploy";

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <ArticleMainBlock
        image={Image_URL+"/nas.png"} // пикча 
        bgColor="yellow"  // цвет фона всего блока pink yellow violet green black
        textColor="black" // цвет текста контент-части, тег и не должен меняться епрст! pink yellow violet green black white
        title="НОСИМОЕ ИСКУССТВО" //лид статьи
        category="ЖИЗНЬ ПОСЛЕ ДИПЛОМА" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="НОВОЕ" // текст тега
        reverse={false} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />


      <section className="bg-white pt-20 pb-24 px-4">
        <p className="mb-5 font-bold text-[18px] text-black md:text-[21px] max-w-screen-md mx-auto">
          Кирилл превращает костюм в «носимое искусство». Его вещи — это образы, абсурд, история и форма, сплетенные в единое высказывание о теле, среде и идентичности.
        </p>

        <p className="mb-[82px] text-[16px] text-black max-w-screen-md mx-auto">
          Кирилл создаёт костюмы, объекты, формы. Его подход — это синтез: он не разделяет рисунок, скульптуру, ткань, цифру и тело. Для него всё начинается с мысли о объёме, даже если речь о плоском рисунке, он уже думает, как превратить его в нечто реальное, материальное.

        </p>

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FFCC01" />
          </svg>
        </div>

        <p className="mb-[100px] text-center italic text-[#FFCC01] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Мне нравится создавать объемные объекты. Даже если это рисунок, я всё равно думаю об объёме. Даже если он получается плоским — я всё равно думаю, куда его потом можно применить, чтобы он стал объемным.»
        </p>

        <Image
          className="mb-[100px] w-full md:max-w-[720px] mx-auto"
          src={Image_URL+"/nas.png"}
          alt="Описание изображения"
          width={720}
          height={720}
        />

        <p className="mb-[12px] text-black text-[16px] max-w-screen-md mx-auto">
          Костюм — это не просто одежда, это медиум. Его проект он называет носимым искусством. Он может существовать как объект, повешенный на человека, или быть адаптирован под движение, под жизнь.

        </p>
        <p className="mb-[40px] text-black text-[16px] max-w-screen-md mx-auto">
          Работая с телом, Кирилл всегда начинает с персонажа. Образ первичен. Вещь не может родиться «просто так».

        </p>

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FFCC01" />
          </svg>
        </div>

        <p className="mb-[60px] text-center italic text-[#FFCC01] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Нельзя взять и сделать что-то из головы. Всё должно быть с историей.»

        </p>

        <p className="mb-[40px] text-black text-[16px] max-w-screen-md mx-auto">
          Он совмещает несочетаемое: кислотные цвета с тонкой графикой, гигантские ножницы с миниатюрными деталями, аккуратность диджитала с хаосом ручной работы.

        </p>

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FFCC01" />
          </svg>
        </div>

        <p className="mb-[60px] text-center italic text-[#FFCC01] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Сегодня я нашёл большие ножницы и маленькие ножницы, положил их рядом и подумал: вот это весело конечно. С размера мы всегда угараем вообще.»


        </p>

        <Image
          className="mb-[82px] w-full"
          src={Image_URL+"/nas.jpeg"}
          alt="Описание изображения"
          width={1920}
          height={720}
        />

        <p className="mb-[40px] text-black text-[16px] max-w-screen-md mx-auto">
          Создание коллекций у него начинается с моделирования в цифровой среде. Он использует диджитал как инструмент, безопасный способ проверить форму и конструкцию, прежде чем перейти к ткани.
        </p>

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FFCC01" />
          </svg>
        </div>

        <p className="mb-[60px] text-center italic text-[#FFCC01] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Я сначала проектирую всё в диджитале, потом печатаю лекала и сшиваю.»

        </p>

        <p className="mb-[82px] text-black text-[16px] max-w-screen-md mx-auto">
          Но при этом он не гонится за гладкостью. Напротив, в его работах чувствуется нерв, спешка, искренность. Машинка жужжит на максимальной скорости, строчки кособокие, форма чуть нелепая и в этом вся суть.
        </p>

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FFCC01" />
          </svg>
        </div>

        <p className="mb-[60px] text-center italic text-[#FFCC01] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Мне нравится наслоение кучи неаккуратностей, в этом я вижу эстетику. Для меня это как спорт — педальку под машинкой я вообще не отпускаю.»

        </p>


        <p className="mb-[40px] text-black text-[16px] max-w-screen-md mx-auto">
          Он эстетизирует искусственное, стебётся над офисными канонами, превращая костюм в ироничный скульптурный объект. Но за каждым решением всегда ощущение смысла. Не внешнего, не навязанного, а внутреннего. Искреннего.
        </p>

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FFCC01" />
          </svg>
        </div>

        <p className="mb-[60px] text-center italic text-[#FFCC01] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Как делать бессмертные вещи? Просто нужно делать искренне.»


        </p>



      </section>
      <div className="bg-black pt-14">
        <div>
          <h1 className="text-[#FF1468] font-yf-giga font-bold mb-6 text-[32px] md:text-[65px] leading-tight md:leading-[0.9] ml-4 md:ml-[24px]">
            ИЗ ЭТОЙ РУБРИКИ
          </h1>
        </div>
        <div className="bg-black"><CardGrid filterTag="ЖИЗНЬ ПОСЛЕ ДИПЛОМА" /></div>

        <div>
          <h1 className="text-[#FF1468] font-yf-giga font-bold mb-6 mt-12 text-[32px] md:text-[65px] leading-tight md:leading-[0.9] ml-4 md:ml-[24px]">
            ЧИТАЙ ТАКЖЕ
          </h1>
        </div>
        <div className="bg-black"><CardGrid></CardGrid></div>
      </div>


    </div>
  );
}
