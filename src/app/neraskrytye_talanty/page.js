import ArticlePreview from "../components/ArticlePreview";
import CardGrid from "../components/CardGrid";
import MainPages from "../components/Main_Pages";




export default function Home() {
  return (
    <div>
       <MainPages
  backgroundImage="/uspex_ili_proval_main.png"
  title="НЕРАСКРЫТЫЕ ТАЛАНТЫ"
  description="Серия интервью о том, как люди, не связанные с творчеством в профессии, раскрывают в свободное время необычные таланты и редкие дары, готовые впечатлить мир."
/>
 <ArticlePreview
        image="/img_2304.png" // пикча 
        bgColor="pink" // цвет фона всего блока pink yellow violet green black
        textColor="white" // цвет текста контент-части, тег и не должен меняться епрст! pink yellow violet green black white
        title="«ИЗ ШКАФА В СТУДИЮ»: КАК ГОЛОСОВЫЕ НА ПРИКОЛЕ СТАЛИ НАЧАЛОМ МУЗЫКАЛЬНОГО ПУТИ" //лид статьи
        category="НЕРАСКРЫТЫЕ ТАЛАНТЫ" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="НОВОЕ" // текст тега
        link="/articles/iz-shkafa-v-studiyu" //ссылка на статью
        reverse={false} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />
      <ArticlePreview
        image="/ame_1.png" // пикча 
        bgColor="black" // цвет фона всего блока
        textColor="pink" // цвет текста контент-части, тег и не должен меняться епрст!
        title="В ПОИСКАХ ИСКРЕННОСТИ: ПУТЕШЕСТВИЕ ФОТОГРАФА" //лид статьи
        category="НЕРАСКРЫТЫЕ ТАЛАНТЫ" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="ФОТОРЕПОРТАЖ" // текст тега
        link="/article8" //ссылка на статью
        reverse={true} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />
       

      <CardGrid filterTag="НЕРАСКРЫТЫЕ ТАЛАНТЫ" />
    </div>
  );
}
