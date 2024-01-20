import { ArticlesSection } from './../components/ArticlesSection/';
import React from 'react'
import { useParams } from 'react-router';
import { ArticleTileInterface } from '@/components/ArticleTile';
import arts from './../assets/response.json';

const substances = arts.filter((art : {category: string}) => art.category == "Substancje");

function ArticlePage() {

  const { id } : any = useParams();

  const article = substances.filter((article : ArticleTileInterface) => article.id == id)[0];

  if (!article) return (<h2>Problem z wyświetleniem artykułu</h2>);

  return (
    <div className="container mx-auto article">
      <div className="grid grid-cols-2 gap-5 mb-10 py-5">
        <div>
          <img src={`http://www.lsdrugs.pl/${article.img}`} className="object-cover w-full max-h-[400px]" />
        </div>
        <div className="flex flex-col justify-center bg-gray p-5 rounded shadow">
          <p>{article.category}</p>
          <h1 className="font-bold text-3xl text-primary">{article.name}</h1>
          <p>{article.intro}</p>
        </div>
      </div>
      <div className="article-content" dangerouslySetInnerHTML={{__html: article.content}}>

      </div>
      <h2>Źródła</h2>
      <div className="article-sources mb-5 bg-gray p-5 rounded shadow" dangerouslySetInnerHTML={{__html: article.sources}}></div>
    </div>
  )
}

export default ArticlePage