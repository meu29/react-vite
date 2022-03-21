import { useNavigate } from "react-router-dom";
import { useSoftwares } from "../../hooks/software";
import Button from "@mui/material/Button";

export const SoftwarePage: React.VFC = () => {

    const navigate = useNavigate();

    const { softwares } = useSoftwares();

    return (
        <>
            {Object.keys(softwares).map(id => 
                <button onClick={() => navigate(`/softwares/register/${id}`)}>
                    {softwares[id].name}
                </button>    
            )}
        </>
    );

}