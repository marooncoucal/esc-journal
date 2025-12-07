import Image from "next/image";
import CardGrid from "../components/CardGrid";
import ArticleMainBlock from "../components/ArticleMainBlock";
import { Image_URL } from "../imageURLdeploy";
export default function Home() {
  
  return (
    <div className="bg-white overflow-x-hidden">
   <ArticleMainBlock
  image={Image_URL+"/ig_1.jpg"} // пикча 
  bgColor="yellow"  // цвет фона всего блока pink yellow violet green black
  textColor="black" // цвет текста контент-части, тег и не должен меняться епрст! pink yellow violet green black white
  title="ДВИЖЕНИЕ – ЭТО СВОБОДА" //лид статьи
  category="ЖИЗНЬ ПОСЛЕ ДИПЛОМА" // рубрика
  authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
  tagText="НОВОЕ" // текст тега
  reverse={false} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
/>


      <section className="bg-white pt-20 pb-24 px-4">
        <p className="mb-5 font-bold text-black text-[18px]  md:text-[21px] max-w-screen-md mx-auto">
          Егор Костенко — моушн-дизайнер и педагог, совмещающий работу с проектами и преподаванием. Он прошел долгий путь от инженерии до творчества. История о том, как складывается жизнь человека, который умеет быть в движении, не забывая при этом о здравом смысле.
        </p>

        <p className="mb-[100px] text-black text-[16px] max-w-screen-md mx-auto">
          Бывают люди, чья траектория напоминает не прямую линию, а маршрут с развилками, остановками и поворотами. Егор Костенко — один из таких. Сегодня он работает с анимацией и графикой, преподает в вузе, монтирует и делает заставки для культурных проектов. А когда-то учился на строительном факультете в Иркутске — “по инерции”, как сам говорит.
        </p>

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d=" M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FFCC01" />
          </svg>
        </div>

        <p className="mb-[12px] text-center italic text-[#FFCC01] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Очень помогло, что у меня не было изначального “горящего желания” делать дизайн. Я просто делал. Это спасает от разочарований — нет завышенных ожиданий, есть только процесс».
        </p>

        <p className="mb-[100px] text-black text-[16px] max-w-screen-md mx-auto">
          После второго курса Егор понял, что стройка — не его путь, и уехал в Москву. Вечернее отделение B&D стало началом нового витка — не сразу анимационного, но уже графического. Параллельно с учёбой он работал дизайнером. А потом увидел, как двигается изображение.
        </p>

        <Image
          className="mb-[100px] w-full md:max-w-[720px] mx-auto"
          src={Image_URL+"/ig_2.png"}
          alt="Описание изображения"
          width={720}
          height={720}
        />

        <p className="mb-[12px] text-black text-[16px] max-w-screen-md mx-auto">
          Моушн оказался в точке пересечения его интересов: визуальной выразительности, композиции, структуры. Через диплом и преподавателя он попадает в студию, где работает сначала дизайнером, затем — по сути, арт-директором. Сегодня студия осталась, но уже как один из элементов его рабочей системы. Главное — фриланс и преподавание.
        </p>

        <p className="mb-[100px] text-black text-[16px] max-w-screen-md mx-auto">
          Работает он преимущественно один, иногда собирает команду под задачу. Клиенты приходят по сарафанному радио. Случайных заказов почти нет — всё на опыте, связях и репутации. Фриланс, по его словам, не только про гибкость, но и про постоянное внутреннее движение.
        </p>

        <Image
          className="mb-[82px] w-full"
          src={Image_URL+"/ig_3.JPG"}
          alt="Описание изображения"
          width={1920}
          height={720}
        />

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FFCC01" />
          </svg>
        </div>

        <p className="mb-[12px] text-center italic text-[#FFCC01] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Ты всё время должен быть на связи с собой: что ты хочешь делать, что у тебя получается, на что уходит время. Иначе утонешь».
        </p>

        <p className="mb-[100px] text-black text-[16px] max-w-screen-md mx-auto">
          Преподавание он воспринимает не как обязательство, а как способ разговора с теми, кто только начинает. В этом есть и отдача, и обновление.
        </p>

        <Image
          className="mb-[100px] w-full md:max-w-[720px] mx-auto"
          src={Image_URL+"/ig_4.png"}
          alt="Описание изображения"
          width={720}
          height={720}
        />

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FFCC01" />
          </svg>
        </div>

        <p className="mb-[12px] text-center italic text-[#FFCC01] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «На парах студенты задают вопросы, на которые я сам не могу сразу ответить. Это честно, и в этом — рост».
        </p>

        <p className="mb-[100px] text-black text-[16px] max-w-screen-md mx-auto">
          При этом, по словам Егора, главные вызовы не профессиональные. Дома — маленький ребёнок, и именно он чаще всего превращает монтаж в испытание.
        </p>

        <Image
          className="mb-[100px] w-full md:max-w-[720px] mx-auto"
          src={Image_URL+"/ig_5.jpg"}
          alt="Описание изображения"
          width={720}
          height={720}
        />

        <div className="flex justify-center items-center mb-[20px]">
          <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 36V18.8464C0 8.68966 5.98295 1.57994 16.8409 0V7.89969C12.1875 8.68965 8.86364 11.6238 8.86364 18.8464H16.8409V36H0ZM39 0V7.89969C34.3466 8.68965 31.0227 11.6238 31.0227 18.8464H39V36H22.1591V18.8464C22.1591 8.68966 28.142 1.57994 39 0Z" fill="#FFCC01" />
          </svg>
        </div>

        <p className="mb-[12px] text-center italic text-[#FFCC01] text-[20px] md:text-[24px] max-w-screen-md mx-auto">
          «Когда рендер идёт под крик из-под стола, ты заново понимаешь смысл тайм-менеджмента».
        </p>

        <p className="mb-[60px] text-black text-[16px] max-w-screen-md mx-auto">
          Сегодня Егор живёт в режиме, где график выстраивает сам, а ритм диктует не только работа, но и жизнь. Он не гонится за масштабами, не строит бренд. Он работает внимательно, глубоко и с интересом.
        </p>

        <p className="mb-[100px] text-center w-[320px] text-[#FFCC01] text-[20px] md:text-[16px] max-w-screen-md mx-auto">
          Егор Костенко - моушн-дизайнер и преподаватель
          @EgorKostenko
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
