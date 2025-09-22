import Image from "next/image";
import ArticleMainBlock from "../components/ArticleMainBlock";
import CardGrid from "../components/CardGrid";

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      
<ArticleMainBlock
  image="/ameli_1.png" // пикча 
  bgColor="green"  // цвет фона всего блока pink yellow violet green black
  textColor="black" // цвет текста контент-части, тег и не должен меняться епрст! pink yellow violet green black white
  title="ТВОРЧЕСКИЙ КОВЧЕГ В МИРЕ ИСКУССТВА" //лид статьи
  category="ДИАЛОГИ ПОКОЛЕНИЙ" // рубрика
  authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
  tagText="ФОТОРЕПОРТАЖ" // текст тега
  reverse={false} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
/>
      

      

      <section className="bg-white pt-20 pb-24">
  {/* Вступительный текст */}
  <div className="px-4">
    <p className="mb-5 font-bold text-[18px] text-black md:text-[21px] max-w-screen-md mx-auto">
      Фотография — это не просто способ запечатлеть мгновение; это ключ, который открывает двери к новым чувствам и творческим идеям.
    </p>

    <p className="mb-8 md:mb-[75px] text-black text-[15px] max-w-screen-md mx-auto">
      В этом многообразии увлечений, которые, казалось бы, так различны, рождается уникальное искусство.
    </p>
  </div>

  {/* Изображение без отступов */}
  <Image
    className="w-full"
    src="/ameli_2.png"
    alt="Описание изображения"
    width={1920}
    height={720}
  />

  {/* Блок с изображением и текстом */}
  <div className="flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 h-[300px] md:h-[721px] relative">
      <img
        src="/ameli_3.png"
        alt="Фотография Амели"
        className="absolute inset-0 w-full h-full object-cover shadow-lg"
      />
    </div>
    <div className="w-full md:w-1/2 px-4 md:px-6 mt-4 md:mt-0">
      <p className="text-black text-[15px] mt-[10px] leading-relaxed">
        От фотографии к серебру и глине – её творчество не знает границ. Этот опыт, накопленный в разных областях, находит своё отражение в её мультидисциплинарном подходе.
      </p>
    </div>
  </div>

  {/* Следующий блок */}
  <section className="flex flex-col md:flex-row items-center mt-6">
    <div className="w-full md:w-1/2 px-4 md:px-6">
      {/* пустой текстовый блок */}
    </div>
    <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative">
      <img
        src="/ameli_4.png"
        alt="Фотография Амели"
        className="absolute inset-0 w-full h-full object-cover shadow-lg"
      />
    </div>
  </section>

  {/* Ещё один блок с текстом и изображением */}
  <div className="flex flex-col md:flex-row mt-0">
    <div className="w-full md:w-1/2 h-[300px] md:h-[721px] relative">
      <img
        src="/ameli_5.png"
        alt="Фотография Амели"
        className="absolute inset-0 w-full h-full object-cover shadow-lg"
      />
    </div>
    <div className="w-full md:w-1/2 px-4 md:px-6 mt-4 md:mt-0">
      <p className="text-black text-[15px] mt-[10px] leading-relaxed">
        Именно так, шаг за шагом, от дизайна до видеоарта, формируется её уникальный стиль.
      </p>
    </div>
  </div>

  {/* Следующий блок с текстом и изображением */}
  <section className="flex flex-col md:flex-row mt-0">
    <div className="w-full md:w-1/2 px-4 md:px-6">
      <p className="text-black text-[15px] mt-[20px]  leading-relaxed">
        Но за каждым увлечением стоит нечто большее — глубокое понимание ценности труда и созидания.
      </p>
    </div>
    <div className="w-full md:w-1/2 h-[300px] md:h-[713px] relative mt-0">
      <img
        src="/ameli_6.png"
        alt="Фотография Амели"
        className="absolute inset-0 w-full h-full object-cover shadow-lg"
      />
    </div>
  </section>

  {/* Полноэкранное изображение */}
  <Image
    className="w-full mt-0"
    src="/ameli_7.png"
    alt="Описание изображения"
    width={1920}
    height={720}
  />

  {/* Заключительный текст */}
  <div className="px-4">
    <p className="mb-12 md:mb-[75px] text-black text-[15px] mt-14 max-w-screen-md mx-auto">
      Каждое творение отражает внутренний мир и эмоции художницы, позволяя зрителям соприкоснуться с её видением и чувствами. Она показывает, что творчество — это не только процесс создания, но и способ общения с окружающими, который может тронуть сердца и вдохновить других на поиск своего пути.
    </p>

    <p className="mb-24 md:mb-[100px] text-center text-[#B1FA63] text-[18px] md:text-[16px] max-w-screen-md mx-auto">
      Валерия Андрианова — мультихудожница, фотограф, дизайнер<br />Студентка Графического дизайна 2024<br />@leerch<br />Портфолио
    </p>
    </div>
</section>
<div className="bg-black pt-14">
                <div>
                                <h1 className="text-[#FF1468] mb-6 text-[32px] md:text-[65px] font-black leading-tight md:leading-[0.9] ml-4 md:ml-[24px]">
                                  ИЗ ЭТОЙ РУБРИКИ
                                </h1>
                              </div>
                            <div className="bg-black"><CardGrid filterTag="ДИАЛОГИ ПОКОЛЕНИЙ" /></div>
              
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