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