import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useSoftwares } from "../../hooks/software";
import { useOpen } from "../../hooks/open";

type Input = {
    name: Software["name"],
    description: Software["description"]
}

export const SoftwareRegisterPage: React.VFC = () => {

    const { id } = useParams();

    const { register, handleSubmit } = useForm<Input>();

    const { softwares, upsertSoftware } = useSoftwares();
    const software = (typeof id === "string" && id in softwares) ? softwares[id] : {name: "", description: ""}

    const { open, on, off } = useOpen();

    const onRegister: SubmitHandler<Input> = (data) => {
        //upsertSoftware(data.name, data.description);
        on();
    }

    return (
        <Container>
            <Stack spacing={2}>
                <TextField {...register("name", {value: software.name})} />
                <TextField multiline rows={3} {...register("description", {value: software.description})} />
            </Stack>
            <Button onClick={handleSubmit(onRegister)}>登録</Button>
            <Snackbar open={open} message="登録しました" onClose={off} />
        </Container>
    );

}
