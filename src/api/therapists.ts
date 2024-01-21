import { api } from ".";

export type Therapist = {
    id: number;
    name: string;
    email: string;
    phone: string;
    page: string;
    description: string;
};

type GetTherapistsReturn = {
    data: Therapist[];
    habitSuccess: boolean;
};

export const getTherapists = (): Promise<GetTherapistsReturn> =>
    api(`/therapists`, {
        method: "GET",
    });

export const getTherapistsFiltered = (userId: number): Promise<GetTherapistsReturn> =>
    api(`/therapists/filtered/${userId}`, {
        method: "GET",
    });