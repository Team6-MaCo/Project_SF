import Header from "../../components/Header";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../../theme";
import { useContext } from "react";

const Profile = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box m="20px">
            <Header title="Profile" subtitle="This is your profile" />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
            >
                <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                />
            </Box>
            <Box textAlign="center">
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                >
                    Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                    VP Fancy Admin
                </Typography>
            </Box>
        </Box>
    );
};

export default Profile;
