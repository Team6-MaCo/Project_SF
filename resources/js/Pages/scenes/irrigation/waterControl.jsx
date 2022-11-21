import {
    Box,
    Button,
    IconButton,
    Typography,
    useTheme,
    Switch,
    TextField,
    Checkbox,
} from "@mui/material";
import { tokens } from "../../../theme";
import { mockTransactions } from "../../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../../components/Header";
import LineChart from "../../../components/LineChart";
import GeographyChart from "../../../components/GeographyChart";
import BarChart from "../../../components/BarChart";
import StatBox from "../../../components/StatBox";
import ProgressCircle from "../../../components/ProgressCircle";
import WaterIcon from "@mui/icons-material/Shower";
import PreventionIcon from "@mui/icons-material/Medication";
import FertilizerIcon from "@mui/icons-material/Vaccines";
import { Link, useNavigate } from "react-router-dom";

const WaterControl = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate();
    var array = [1, 2, 3, 4, 5];

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header
                    title="물 분사 컨트롤"
                    subtitle="You can control about Water"
                />

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
            </Box>

            <Box>
                <Typography
                    color={colors.redAccent[500]}
                    variant="h5"
                    fontWeight="600"
                >
                    물분사량
                </Typography>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                <Box
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12,361"
                        subtitle="하루 분사량"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <WaterIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "30px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12,361"
                        subtitle="주 평균 분사량"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <WaterIcon
                                sx={{
                                    color: colors.redAccent[600],
                                    fontSize: "30px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 4"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12,361"
                        subtitle="월 평균 분사량"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <WaterIcon
                                sx={{
                                    color: colors.blueAccent[600],
                                    fontSize: "30px",
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    // display="flex"
                    // justifyContent="space-between"
                    // alignItems="center"
                    overflow="auto"
                >
                    <form>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                관수 제어
                            </Typography>
                            <Button color="secondary" variant="contained">
                                저장
                            </Button>
                            <Button color="success" variant="contained">
                                가동
                            </Button>
                            <Button color="error" variant="contained">
                                정지
                            </Button>
                        </Box>
                        {array.map(function (a, i) {
                            return (
                                <Box>
                                    <Box
                                        // gridRow="span 2"
                                        display="flex"
                                        justifyContent="space-around"
                                        alignItems="center"
                                        borderBottom={`4px solid ${colors.primary[500]}`}
                                    >
                                        {array[i] % 2 == 0 ? (
                                            <Switch
                                                color="secondary"
                                                defaultChecked
                                            ></Switch>
                                        ) : (
                                            <Switch color="secondary"></Switch>
                                        )}
                                        <Typography>
                                            {array[i]}번라인
                                        </Typography>
                                        <TextField variant="filled"></TextField>
                                        <Typography>분</Typography>
                                        <Box>
                                            <Checkbox color="secondary">
                                                체크체크
                                            </Checkbox>
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </form>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography
                            color={colors.grey[100]}
                            variant="h5"
                            fontWeight="600"
                        >
                            최근 분사 내역
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>
                                {transaction.date}
                            </Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                <Box
                    gridColumn="span 12"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                분사량 그래프
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: "26px",
                                        color: colors.greenAccent[500],
                                    }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>

                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600">
                        용량
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography>
                            Includes extra misc expenditures and costs
                        </Typography>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ padding: "30px 30px 0 30px" }}
                    >
                        분사비율
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    padding="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ marginBottom: "15px" }}
                    >
                        분사 지역
                    </Typography>
                    <Box height="200px">
                        <GeographyChart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default WaterControl;
