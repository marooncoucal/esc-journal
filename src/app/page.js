import ArticlePreview from "./components/ArticlePreview";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import MainBlock from "./components/MainBlock";
import { YffraEcto } from "./fonts/fonts";
import { Image_URL } from "./imageURLdeploy";

export default function Home() {
  // const YffraEctoText = YffraEcto.style.fontFamily
  // console.log(YffraEctoText)
  return (
    <div>
      {/* <div className={`yffra-ecto`}>НОСИМОЕ ИСКУССТВО И ЭСТЕТИКА БЕЗ ПРАВИЛ</div> */}
      {/* <div className={`font-${YffraEctoText}`}>НОСИМОЕ ИСКУССТВО И ЭСТЕТИКА БЕЗ ПРАВИЛ</div> */}
      <MainBlock
        backgroundImage={Image_URL + "/3840-2160-2.png"}
        title="НОСИМОЕ ИСКУССТВО И ЭСТЕТИКА БЕЗ ПРАВИЛ"
        description="Почему дизайн костюма на самом деле является синтезом изобразительности"
      />
      <ArticlePreview
        image={Image_URL + "/img_2304.png"} // пикча
        bgColor="pink" // цвет фона всего блока pink yellow violet green black
        textColor="white" // цвет текста контент-части, тег и не должен меняться епрст! pink yellow violet green black white
        title="«ИЗ ШКАФА В СТУДИЮ»: КАК ГОЛОСОВЫЕ НА ПРИКОЛЕ СТАЛИ НАЧАЛОМ МУЗЫКАЛЬНОГО ПУТИ" //лид статьи
        category="НЕРАСКРЫТЫЕ ТАЛАНТЫ" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="НОВОЕ" // текст тега
        link="/article1" //ссылка на статью
        reverse={false} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />
      <ArticlePreview
        image={Image_URL + "/1.1.png"} // пикча
        bgColor="black" // цвет фона всего блока
        textColor="violet" // цвет текста контент-части, тег и не должен меняться епрст!
        title="ИСПЫТАНИЯ, КОТОРЫЕ ЗАКАЛЯЮТ ЧЕМПИОНОВ" //лид статьи
        category="УСПЕХ ИЛИ ПРОВАЛ" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="НОВОЕ" // текст тега
        link="/article2" //ссылка на статью
        reverse={true} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />
      <CardGrid></CardGrid>
      {/* <CardTest2></CardTest2> */}
      {/* <CardList></CardList> */}
    </div>
  );
}
