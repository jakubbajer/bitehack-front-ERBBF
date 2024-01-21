import React from 'react'
import arts from './../assets/pages.json';
import { PagesSection } from './../components/PagesSection.tsx';

const pages = arts["pages"];

function UsefulPagesPage() {
    return (
        <>
            <div className="h-[200px] flex justify-center items-center bg-primary p-4 mb-10">
                <h3 className="text-center text-3xl font-bold text-white">
                    Przydatne strony
                </h3>
            </div>
            <PagesSection pages={pages} />
        </>
    )
}

export default UsefulPagesPage