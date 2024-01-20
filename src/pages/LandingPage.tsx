import { ArticlesSection } from './../components/ArticlesSection/'
import React from 'react'
import arts from './../assets/response.json';

const substances = arts.filter((art : {category: string}) => art.category == "Substancje").slice(0, 3);

function LandingPage() {

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-10 mb-10 py-5">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold"><span className="text-accent">Razem</span> po lepszą wersje <span className="text-accent">Ciebie</span>.</h2>
            <p>Witaj na <span className="text-accent">XYZ</span>, najlepszej platformie która wspomoże twoją walkę z uzależnieniami.</p>
          </div>
          <div>
            <img src="/landing.png" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold">Wiedza</h3>
      </div>
      <ArticlesSection substances={substances}/>
    </>
  )
}

export default LandingPage