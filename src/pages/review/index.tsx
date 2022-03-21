import { useState } from "react";
import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { reviewState } from "../../selectors/review";

export const ReviewPage: React.VFC = () => {

    const [id, setId] = useState<string>("");

    const reviews = useRecoilValue(reviewState);

    return (
        <>
            {reviews.length === 0 && <p>アプリがありません</p>}
            {
                <Select onChange={(e: any) => setId(e.target.value)}>
                    {reviews.map(review => <MenuItem key={review.id}>{review.name}</MenuItem>)}
                </Select>
            }

        </>
    );

}

// <Button onClick={() => setPage((prevPage) => prevPage + 1)}>次</Button> const [page, setPage] = useState<number>(1);