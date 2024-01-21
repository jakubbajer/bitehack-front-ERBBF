import {useQuery} from "react-query";
import {getTherapistsFiltered} from "../../api/therapists.ts";
import React from "react";
import {useUserContext} from "./../../hooks/useUserContext.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faLink, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

export const SuspiciousUpdate = () => {
    const {
        data: {userId},
    } = useUserContext();

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["therapists"],
        queryFn: () => getTherapistsFiltered(userId),
    });

    if (!data || isLoading) {
        return "...";
    }

    if (isError) {
        console.error(error);
        return <></>;
    }

    return (
        <div className="w-full flex items-center justify-center flex-col">
            <img src="/question.png" className="max-w-40 h-auto mb-10"/>
            <h2 className="text-xl font-bold">Cześć, twój update wydał nam się niepokojący.</h2>
            <p>Pamiętaj, ze w razie problemów warto zwrócić się do osoby bliskiej lub skorzystać z pomocy
                specjalisty.</p>
            <p>Możesz skorzystać z pomocy naszych terapeutów</p>
            <div className="articles-section p-2">
                <div className="container mx-auto">
                    <div className="flex columns-3 gap-4 flex-wrap justify-center">
                        {data.map((t) => (
                            <div
                                className="flex flex-col shadow-md max-w-[300px] rounded overflow-hidden">
                                <div
                                    className="bg-white flex flex-col justify-between h-full p-4">
                                    <div>
                                        <h1 className="text-xl font-bold hover:text-gray-700 pb-2">
                                            {t.name}
                                        </h1>
                                        <hr className="my-1 border-t border-gray-300"/>
                                        {/* Reduced margin */}
                                        <p className="text-sm line-clamp-3">{t.description}</p>

                                        <div className="flex items-center pt-1">
                                            <FontAwesomeIcon icon={faPhoneAlt}/><i
                                                className="fas fa-phone-alt pr-1"></i>
                                            <span>{t.phone}</span>
                                        </div>

                                        <div className="flex items-center pt-1">
                                            <FontAwesomeIcon icon={faEnvelope}/><i
                                                className="fas fa-envelope pr-1"></i>
                                            <span>{t.email}</span>
                                        </div>

                                        <div className="flex items-center pt-1">
                                            <FontAwesomeIcon icon={faLink}/><i
                                                className="fas fa-link pr-1"></i>
                                            <span>{t.page}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}