import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";

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
  const navigate = useNavigate();

  return (
    <article className="flex flex-col shadow max-w-[400px] rounded overflow-hidden">
      <Link to={`/artykuly/${id}`} className="hover:opacity-75">
        <img
          src={`http://www.lsdrugs.pl/${img}`}
          className="w-full max-h-[250px] object-cover"
        />
      </Link>
      <div className="bg-white flex flex-col justify-between h-full p-6">
        <div className="mb-5">
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
        <Button kind="primary" children="Przeczytaj" handleClick={() => navigate(`/artykuly/${id}`)}/>
      </div>
    </article>
  );
};
