import ArticlePreview from "../components/ArticlePreview";
import CardGrid from "../components/CardGrid";
import MainPages from "../components/Main_Pages";




export default function Home() {
  return (
    <div>
       <MainPages
  backgroundImage="/uspex_ili_proval_main.png"
  title="УСПЕХ ИЛИ ПРОВАЛ"
  description="Серия интервью о том, как выпускники, студенты и преподаватели делятся историями успеха и провала, подчеркивая роль случайных факторов, сформировавших их путь."
/>
 <ArticlePreview
        image="/1.1.png" // пикча 
        bgColor="violet" // цвет фона всего блока
        textColor="black" // цвет текста контент-части, тег и не должен меняться епрст!
        title="ИСПЫТАНИЯ, КОТОРЫЕ ЗАКАЛЯЮТ ЧЕМПИОНОВ" //лид статьи
        category="УСПЕХ ИЛИ ПРОВАЛ" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="НОВОЕ" // текст тега
        link="/article2" //ссылка на статью
        reverse={false} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />
      <ArticlePreview
        image="/masha_1.png" // пикча 
        bgColor="black" // цвет фона всего блока
        textColor="violet" // цвет текста контент-части, тег и не должен меняться епрст!
        title="КОГДА ДИЗАЙН — ЭТО НЕ ПРОФЕССИЯ,А СПОСОБ ЖИТЬ" //лид статьи
        category="УСПЕХ ИЛИ ПРОВАЛ" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="НОВОЕ" // текст тега
        link="/article4" //ссылка на статью
        reverse={true} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />

      <CardGrid filterTag="УСПЕХ ИЛИ ПРОВАЛ" />
    </div>
  );
}
