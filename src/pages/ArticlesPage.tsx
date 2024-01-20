import React from 'react'
import arts from './../assets/response.json';
import { ArticlesSection } from './../components/ArticlesSection';

const substances = arts.filter((art : {category: string}) => art.category == "Substancje");

function ArticlesPage() {
  return (
    <>
      <div className="h-[200px] flex justify-center items-center bg-primary p-4 mb-10">
        <h3 className="text-center text-3xl font-bold text-white">
          Artykuły
        </h3>
      </div>
      <ArticlesSection substances={substances} />
    </>
  )
}

export default ArticlesPage