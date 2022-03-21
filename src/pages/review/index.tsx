import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { reviewState } from "../../selectors/review";

export const ReviewPage: React.VFC = () => {

    const reviews = useRecoilValue(reviewState);

    return (
        <>
        {JSON.stringify(reviews)}
        </>
    );

}