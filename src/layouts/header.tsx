import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Header: React.VFC = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>     
                    <Link to="/">
                        <Typography variant="h6">タイトル未定</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )

}