import { useNavigate } from "react-router-dom";
import { useSoftwares } from "../../hooks/software";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const SoftwarePage: React.VFC = () => {

    const navigate = useNavigate();

    const { softwares } = useSoftwares();

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>アプリ名</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(softwares).map(id => 
                            <TableRow key={id} hover onClick={() => navigate(`/softwares/register/${id}`)}>
                                <TableCell>{softwares[id].name}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );

}