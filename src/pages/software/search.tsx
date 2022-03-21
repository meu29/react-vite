import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useSoftwares } from "../../hooks/software";
import { useItunesSoftwares } from "../../hooks/itunes-software";


export const SoftwareSearchPage: React.VFC = () => {

    const { softwares, upsertSoftware, deleteSoftware } = useSoftwares();
    const {itunes_softwares, searchItunesSoftwares } = useItunesSoftwares();

    const { register, handleSubmit } = useForm<SearchItunesSoftwareInput>();

    const onSearchSubmit: SubmitHandler<SearchItunesSoftwareInput > = (data) => {
        searchItunesSoftwares(data.term);
    }

    return (

        <>
            <TextField {...register("term")} />
            <Button onClick={handleSubmit(onSearchSubmit)}>検索</Button>
            {itunes_softwares.map(itunes_software => 
                <>
                    <p>{itunes_software.name}</p>
                    <Button onClick={() => upsertSoftware(itunes_software.name, itunes_software.description, itunes_software.id)}>Fav</Button>    
                </>
            )}
        </>

    )

}