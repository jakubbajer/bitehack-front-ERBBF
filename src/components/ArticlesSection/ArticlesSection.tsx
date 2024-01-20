import { ArticleTile, ArticleTileInterface } from "../ArticleTile/ArticleTile";

export const ArticlesSection = ({
  substances,
}: {
  substances: ArticleTileInterface[];
}) => {
  return (
    <div className="articles-section p-4">
      <div className="container mx-auto">
        <div className="flex columns-3 gap-10 flex-wrap">
          {substances.map((substance: ArticleTileInterface) => (
            <ArticleTile key={substance.id} {...substance} />
          ))}
        </div>
      </div>
    </div>
  );
};
