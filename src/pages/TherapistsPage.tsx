import React from 'react'
import {useQuery} from "react-query";
import {getTherapists} from "../api/therapists.ts";
import {Link} from "react-router-dom";
import {faEnvelope, faLink, faPhoneAlt, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TherapistsPage() {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["therapists"],
        queryFn: () => getTherapists(),
    });

    if (!data || isLoading) {
        return "...";
    }

    if (isError) {
        console.error(error);
        return <></>;
    }

    return (
        <>
            <div className="h-[200px] flex justify-center items-center bg-primary p-4 mb-10">
                <h3 className="text-center text-3xl font-bold text-white">
                    Nasi specjaliści
                </h3>
            </div>
            <div className="articles-section p-4">
                <div className="container mx-auto">
                    <div className="flex columns-3 gap-10 flex-wrap justify-center">
                        {data.map((t) => (
                            <div className="flex flex-col shadow-2xl max-w-[400px] rounded overflow-hidden">
                                <div className="bg-white flex flex-col justify-between h-full p-6">
                                    <div>
                                        <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
                                            {t.name.split(' ')[0]}<br />
                                            {t.name.split(' ')[1]}
                                        </h1>
                                        <hr className="my-2 border-t border-gray-300" />
                                        <p className="text-text line-clamp-3">{t.description}</p>

                                        <div className="flex items-center pt-2">
                                            <FontAwesomeIcon icon={faPhoneAlt} /><i className="fas fa-phone-alt pr-2"></i>
                                            <span>{t.phone}</span>
                                        </div>

                                        <div className="flex items-center pt-2">
                                            <FontAwesomeIcon icon={faEnvelope} /><i className="fas fa-envelope pr-2"></i>
                                            <span>{t.email}</span>
                                        </div>

                                        <div className="flex items-center pt-2">
                                            <FontAwesomeIcon icon={faLink} /><i className="fas fa-link pr-2"></i>
                                            <span>{t.page}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TherapistsPage