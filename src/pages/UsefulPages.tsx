import React from "react";
import arts from "./../assets/pages.json";

const pages = arts["pages"];

export interface PageInterface {
  link: string;
  name: string;
  description: string;
  image: string;
}


function UsefulPagesPage() {
  return (
    <>
      <div className="h-[200px] flex justify-center items-center bg-primary p-4 mb-10">
        <h3 className="text-center text-3xl font-bold text-white">Przydatne strony</h3>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 mb-4">
        {pages.map((page: PageInterface, index: number) => (
            <a href={page.link} className="hover:bg-gray">
                <div className={`p-4 my-4 flex flex-col justify-center items-center`}>
                    <img src={page.image} className="page-image-style" />

                    <div className="my-4">
                        <h1 className="text-xl font-bold my-2">{page.name}</h1>
                        <p className="my-2">{page.description}</p>
                    </div>
                </div>
            </a>
        ))}
        </div>
      </div>
    </>
  );
}

export default UsefulPagesPage;
