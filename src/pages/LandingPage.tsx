import { ArticlesSection } from './../components/ArticlesSection/'
import React from 'react'
import arts from './../assets/response.json';

const substances = arts.filter((art : {category: string}) => art.category == "Substancje").slice(0, 3);

function LandingPage() {

  return (
    <div>
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold">Wiedza</h3>
      </div>
      <ArticlesSection substances={substances}/>
    </div>
  )
}

export default LandingPage