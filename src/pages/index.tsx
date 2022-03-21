import { useState } from "react";
import useSWR from "swr";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";

export const IndexPage: React.VFC = () => {

    const [page, setPage] = useState<number>(1);

    const { data, error } = useSWR(`https://itunes.apple.com/jp/rss/customerreviews/id=284882215/sortBy=mostRecent/page=${page}/json`);
    
    return (
        <>
            {/*data !== undefined && (
                <>
                    {data.feed.map((feed: any) => 
                        <p>{feed}</p>    
                    )}
                </>
                    )*/}
            {JSON.stringify(data)}
            <Button onClick={() => setPage((prevPage) => prevPage + 1)}>次</Button>
        </>
    );

}