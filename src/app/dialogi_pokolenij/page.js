import ArticlePreview from "../components/ArticlePreview";
import CardGrid from "../components/CardGrid";
import MainPages from "../components/Main_Pages";

export default function Home() {
  return (
    <div>
       <MainPages
  backgroundImage="/dialogi_pokolenij.png"
  title="ДИАЛОГИ ПОКОЛЕНИЙ"
  description="Серия интервью о том, как преподаватели и студенты сопоставляют свои взгляды на одни и те же явления, выявляя удивительные расхождения восприятия поколений."
/>
 <ArticlePreview
        image="/ameli_1.png" // пикча 
        bgColor="green" // цвет фона всего блока
        textColor="black" // цвет текста контент-части, тег и не должен меняться епрст!
        title="ТВОРЧЕСКИЙ КОВЧЕГ В МИРЕ ИСКУССТВА" //лид статьи
        category="ДИАЛОГИ ПОКОЛЕНИЙ" // рубрика
        authors="Авторы статьи Дарья Юркина и Софья Еремина" //авторы
        tagText="ФОТОРЕПОРТАЖ" // текст тега
        link="/article3" //ссылка на статью
        reverse={false} // Меняет порядок блоков на md+ true - текст слева картинка справа, false - наоборот
      />

      <CardGrid filterTag="ДИАЛОГИ ПОКОЛЕНИЙ" />
    </div>
  );
}
