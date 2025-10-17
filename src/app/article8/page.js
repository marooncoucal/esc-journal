import Image from "next/image";
import CardGrid from "../components/CardGrid";
import ArticleMainBlock from "../components/ArticleMainBlock";
import { Image_URL } from "../imageURLdeploy";

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      
        <ArticleMainBlock
     image={Image_URL+"/ame_1.png"} // пикча 
     bgColor="pink"  // цвет фона всего блока pink yellow violet green black
     textColor="white" // цвет текста контент-части, тег и не должен меняться епрст! pink yellow violet green black white
     title="В ПОИСКАХ ИСКРЕННОСТИ: ПУТЕШЕСТВИЕ ФОТОГРАФА" //лид статьи
     category="НЕРАСКРЫТЫЕ ТАЛАНТЫ" // рубрика
     authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
     tagText="ФОТОРЕПОРТАЖ" // текст тега
     reverse={false} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
   />
      
            


      

      <section className="bg-white pt-12 md:pt-20 pb-16 md:pb-24 px-4">
        <p className="mb-8 md:mb-[40px] text-[#000000] font-bold text-[20px] md:text-[26px] max-w-screen-md mx-auto">
          Я — фотограф, который стремится запечатлеть человека таким, какой он есть, и в этом поиске искренности я нахожу свою силу.
        </p>

        <p className="mb-8 md:mb-[100px] text-black text-[15px] max-w-screen-md mx-auto">
          В этом процессе съемки важно создать атмосферу доверия и комфорта, где каждый может раскрыться и показать свою настоящую сущность.
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[300px]  md:h-[721px] relative">
            <img
              src={Image_URL +"/ame_2.png"}
              alt="Фотография Амели"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col mt-[300px] md:mt-0">
            <div className="w-full h-[300px] md:h-[575px] relative">
              <img
                src={Image_URL +"/ame_3.png"}
                alt="Фотография Амели"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <p className="text-black text-[15px] leading-relaxed mt-4 px-2 md:px-0">
              Я всегда искала способы донести свои эмоции: через живопись, стихи и, наконец, через скетчинг. Но именно фотография позволила мне быстро зафиксировать происходящее и поймать мимолётные моменты жизни.
            </p>
          </div>
        </div>

        <Image
          className="w-full mt-12 md:mt-16"
          src={Image_URL+"/ame_4.png"}
          alt="Описание изображения"
          width={1920}
          height={720}
        />

        <section className="flex flex-col md:flex-row mt-12 md:mt-16">
          <div className="w-full md:w-1/2 px-2 md:px-6">
            <p className="text-black text-[15px] leading-relaxed">
              Я бродила по городу, фиксируя абсурдные ситуации и интересные моменты. Стрит-фотография стала моим личным пространством для самовыражения.
            </p>
          </div>

          <div className="w-full md:w-1/2 h-[300px] md:h-[713px] relative mt-8 md:mt-0">
            <img
              src={Image_URL +"/ame_5.png"}
              alt="Фотография Амели"
              className="absolute inset-0 w-full h-full object-cover shadow-lg"
            />
          </div>
        </section>

        <div className="flex flex-col md:flex-row mt-12 md:mt-16">
          <div className="w-full md:w-1/2 h-[300px] md:h-[406px] relative">
            <img
              src={Image_URL +"/ame_6.png"}
              alt="Фотография Амели"
              className="absolute inset-0 w-full h-full object-cover shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 px-2 md:px-6 mt-[300px] md:mt-0">
            <p className="text-black text-[15px] mb-[12px] leading-relaxed">
              Всегда с плёночной камерой, ловлю мгновения.
            </p>

            <p className="text-black text-[15px] leading-relaxed">
              У меня была серия снимков людей в метро — это уникальное пространство, где можно незаметно запечатлеть разнообразие человеческих характеров.
            </p>
          </div>
        </div>

        <section className="flex flex-col md:flex-row mt-12 md:mt-16">
          <div className="w-full md:w-1/2 px-2 md:px-6">
            <p className="text-black text-[15px] leading-relaxed">
              Создание настроения на съёмке — это искусство, где музыка формирует атмосферу и раскрывает характер модели.
            </p>
          </div>

          <div className="w-full md:w-1/2 h-[300px] md:h-[713px] relative mt-8 md:mt-0">
            <img
              src={Image_URL +"/ame_7.png"}
              alt="Фотография Амели"
              className="absolute inset-0 w-full h-full object-cover shadow-lg"
            />
          </div>
        </section>

        <Image
          className="w-full mt-12 md:mt-16"
          src={Image_URL+"/ame_8.png"}
          alt="Описание изображения"
          width={1920}
          height={720}
        />

        <p className="mb-12 md:mb-[75px] text-black text-[15px] mt-24 max-w-screen-md mx-auto">
          Каждый кадр — это не просто изображение; это история, эмоция и мгновение жизни. В этом постоянном поиске я нахожу вдохновение и радость.
        </p>

        <p className="mb-24 md:mb-[100px] text-center w-full text-[#FF1468] text-[18px] md:text-[16px] max-w-screen-md mx-auto">
          Амели Харрисон — фотограф, дизайнер<br />Выпускница Цифрового дизайна 2023<br />tg: @flowerson29<br />Портфолио
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
