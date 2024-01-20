import React from 'react'
import arts from './../../assets/response.json';
import { ArticleTile, ArticleTileInterface } from '../ArticleTile/ArticleTile';

const substances = arts.filter((art : {category: string}) => art.category == "Substancje").slice(0, 3);

export const ArticlesSection = () => {
  return (
    <div className="articles-section p-4">
        <div className="container mx-auto">
            <h3 className="text-4xl font-bold">Wiedza</h3>
            <div className="flex columns-3 gap-10 flex-wrap">
                {substances.map((substance : ArticleTileInterface) => (
                    <ArticleTile {...substance} />
                ))}
            </div>
        </div>
    </div>
  )
}

