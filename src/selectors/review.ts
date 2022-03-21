import { selector } from "recoil"; 
import { softwareState } from "../atoms/software";

export const reviewState = selector({

    key: "reviews",

    get: async ({ get }) => {

        const softwares = get(softwareState);
        
        let reviews = {}
        
        for (const id in softwares) {
            try { 
                const res = await fetch(`https://itunes.apple.com/jp/rss/customerreviews/id=${id}/sortBy=mostRecent/page=${1}/json`);
                console.log((await res.json()).feed);
            } catch (error) {
                console.log(error);
            }
        }

        return [];

    }

});