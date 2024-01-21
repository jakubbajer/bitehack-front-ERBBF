import { ArticleTile, ArticleTileInterface } from "../ArticleTile/ArticleTile";

export const ArticlesSection = ({
  substances,
}: {
  substances: ArticleTileInterface[];
}) => {
  return (
    <div className="articles-section p-4 my-10">
      <div className="container mx-auto">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold">Wiedza</h3>
        </div>
        <div className="flex columns-3 gap-10 flex-wrap">
          {substances.map((substance: ArticleTileInterface) => (
            <ArticleTile key={substance.id} {...substance} />
          ))}
        </div>
      </div>
    </div>
  );
};
