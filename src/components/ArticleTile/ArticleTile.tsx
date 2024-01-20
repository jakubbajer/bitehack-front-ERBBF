import { Link } from "react-router-dom"

export interface ArticleTileInterface {
    name: string
    content: string
    cartegory: string 
    author: string
    img: string
    intro: string
}

export const ArticleTile = ({name, content, category, author, img, intro} : ArticleTileInterface) => {
  return (
    <article className="flex flex-col shadow max-w-[400px]">
        <a href="#" className="hover:opacity-75">
            <img src={`http://www.lsdrugs.pl/${img}`} className="w-full max-h-[300px] object-cover" />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
            <p className="text-primary text-sm font-bold uppercase pb-4">
                { category }
            </p>
            <Link to="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
                { name }
            </Link>
            <p>
                { intro }
            </p>
        </div>
    </article>
  )
}