import { selector } from "recoil"; 
import { softwareState } from "../atoms/software";

type Review = {
    title: string;
    content: string;
    rating: number;
}

export const reviewState = selector({

    key: "reviews",

    get: async ({ get }) => {

        const softwares = get(softwareState);
        
        let reviews: {id: string, name: string, reviews: Review[]}[] = [];

        for (const id in softwares) {
            if (typeof softwares[id].itunes_id === "number") {
                try { 
                    const res = await fetch(`https://itunes.apple.com/jp/rss/customerreviews/id=${softwares[id].itunes_id}/sortBy=mostRecent/page=${1}/json`);
                    reviews.push({
                        id: id,
                        name: softwares[id].name,
                        reviews: (await res.json()).feed.entry.map((entry: any) => {
                            return {
                                title: entry["title"]["label"],
                                content: entry["content"]["label"],
                                rating: Number(entry["im:rating"])
                            }
                        })
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        }
        
        return reviews;

    }

});