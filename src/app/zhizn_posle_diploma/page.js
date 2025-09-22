import ArticlePreview from "../components/ArticlePreview";
import CardGrid from "../components/CardGrid";
import MainPages from "../components/Main_Pages";




export default function Home() {
  return (
    <div>
       <MainPages
  backgroundImage="/uspex_ili_proval_main.png"
  title="ЖИЗНЬ ПОСЛЕ ДИПЛОМА"
  description="Серия интервью о том, как выпускники смело встречают первые карьерные вызовы, сталкиваясь с трудностями и делая первые шаги в поиске работы."
/>
 <ArticlePreview
        image="/IMG_7630.JPG" // пикча 
        bgColor="yellow" // цвет фона всего блока pink yellow violet green black
        textColor="black" // цвет текста контент-части, тег и не должен меняться епрст! pink yellow violet green black white
        title="ДОЛГИЙ ПУТЬ К ПРОСТЫМ ИСТИНАМ" //лид статьи
        category="ЖИЗНЬ ПОСЛЕ ДИПЛОМА" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="НОВОЕ" // текст тега
        link="/article5" //ссылка на статью
        reverse={false} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />
      
      
      <ArticlePreview
        image="/ig_1.jpg" // пикча 
        bgColor="black" // цвет фона всего блока
        textColor="yellow" // цвет текста контент-части, тег и не должен меняться епрст!
        title="ДВИЖЕНИЕ – ЭТО СВОБОДА" //лид статьи
        category="ЖИЗНЬ ПОСЛЕ ДИПЛОМА" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="НОВОЕ" // текст тега
        link="/article6" //ссылка на статью
        reverse={true} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />
      
       

      <CardGrid filterTag="ЖИЗНЬ ПОСЛЕ ДИПЛОМА" />
    </div>
  );
}
