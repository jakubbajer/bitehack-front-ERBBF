import {PageInterface} from "@/components/PageInterface";
import React from "react";


export const PagesSection = ({
                                 pages,
                             }: {
    pages: PageInterface[];
}) => {
    return (
        <div className="w-full">
            <div className="container mx-auto">
                {pages.map((page: PageInterface, index: number) => (
                    <div className={`p-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray'}`}>
                        <div className="my-4">
                            <h1 className="text-3xl font-bold my-2">{page.name}</h1>
                            <p className="my-2">{page.description}</p>
                        </div>
                        <img src={page.image}/>
                    </div>
                ))}
            </div>
        </div>
    );
};
