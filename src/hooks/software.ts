import { useRecoilState } from "recoil";
import { v4 } from "uuid";
import { softwareState } from "../atoms/software";

export const useSoftwares = () => {

    const [ softwares, setSoftwares ] = useRecoilState(softwareState);

    const upsertSoftware = (name: string, description: string, itunes_id: number | null, id: string = v4()) => {
        setSoftwares(prevSoftwares => {
            return {
                ...prevSoftwares,
                [id]: {
                    name: name,
                    description: description,
                    itunes_id: itunes_id
                }
            }
        });
    }

    const deleteSoftware = (id: string) => {
        setSoftwares(prevSoftwares => {
            const { [id]: Software, ...others } = prevSoftwares;
            return others;
        });
    }

    return {
        softwares,
        upsertSoftware,
        deleteSoftware
    }

}