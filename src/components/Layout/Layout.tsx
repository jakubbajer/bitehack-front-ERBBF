import { Footer } from "./Footer";
import { TopMenu } from "./TopMenu";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopMenu />
      <div id="content">{children}</div>
      <Footer />
    </>
  );
};
