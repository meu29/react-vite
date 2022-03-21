import { useState } from "react";

export const useItunesSoftwares = () => {

    const [itunes_softwares, setItunesSoftwares] = useState<{id: number, name: string, description: string}[]>([]);

    const searchItunesSoftwares = async (term: string) => {

        try {

            const res = await fetch(`https://itunes.apple.com/search?term=${encodeURI(term)}&media=software&entity=software&country=jp&lang=ja_jp`);
            const results = (await res.json()).results;

            setItunesSoftwares(() => results.map((result: any) => {
                return {
                    id: result.trackId,
                    name: result.trackName,
                    description: result.description
                }
            }));

        } catch (error) {
            console.log(error);
        }

    }

    return {
        itunes_softwares,
        searchItunesSoftwares
    }

}