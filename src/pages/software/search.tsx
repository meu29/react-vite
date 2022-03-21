import { useState } from "react";
import useSWR from "swr";

import Button from "@mui/material/Button";

import { useSoftwares } from "../../hooks/software";

export const SoftwareSearchPage: React.VFC = () => {

    const [term, setTerm] = useState<string>("電車");

    const { data, error } = useSWR(`https://itunes.apple.com/search?term=${encodeURI(term)}&media=software&entity=software&country=jp&lang=ja_jp`);

    const { softwares, upsertSoftware, deleteSoftware } = useSoftwares();

    return (

        <>
            {data !== undefined && (
                <>
                    {data.results.map((result: any) => 
                        <>
                            <p>{result.trackName}</p>
                            {/*<p>{result.description}</p>*/}
                            <Button onClick={() => upsertSoftware(result.trackName, result.description, result.trackId)}>Fav</Button>
                            {/*!(result.trackId in softwares) && <Button onClick={() => deleteSoftware(result.id)}>Delete</Button>*/}
                        </>    
                    )}
                </>
            )}
        </>

    )

}