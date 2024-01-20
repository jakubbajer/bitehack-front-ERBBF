import { Link } from "react-router-dom";

export interface ArticleTileInterface {
  id: number;
  name: string;
  content: string;
  cartegory: string;
  author: string;
  img: string;
  intro: string;
  sources: string;
}

export const ArticleTile = ({
  id,
  name,
  content,
  category,
  author,
  img,
  intro,
}: ArticleTileInterface) => {
  return (
    <article className="flex flex-col shadow max-w-[400px] rounded overflow-hidden">
      <Link to={`/artykuly/${id}`} className="hover:opacity-75">
        <img
          src={`http://www.lsdrugs.pl/${img}`}
          className="w-full max-h-[250px] object-cover"
        />
      </Link>
      <div className="bg-white flex flex-col justify-between h-full p-6">
        <div>
          <p className="text-primary text-sm font-bold uppercase pb-4">
            {category}
          </p>
          <Link
            to={`/artykuly/${id}`}
            className="text-3xl font-bold hover:text-gray-700 pb-4"
          >
            {name}
          </Link>
          <p className="text-text line-clamp-3">{intro}</p>
        </div>
        <Link
          to={`/artykuly/${id}`}
          className="p-4 bg-primary rounded text-white text-center font-body mt-5"
        >
          Przeczytaj
        </Link>
      </div>
    </article>
  );
};
