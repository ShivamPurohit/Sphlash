import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const theme = createTheme();

export default function PreviousLoans() {
    const history = useHistory()

    const [transaction, setTransaction] = useState([])

    useEffect(() => {
        axios.get("Transaction.json")
            .then((res) => {
                setTransaction(res.data);
            })
    }, [])

    return (
        <ThemeProvider theme={theme}>

            <main style={{ width: "100%" }}>
                {/* Hero unit */}
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="white"
                            gutterBottom
                        >
                            Transaction History
                        </Typography>

                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained" onClick={() => history.push("/stuDashboard")}>Go Back to Dashboard</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {transaction.map((value) => (
                            <Grid item key={value} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: "rgba(0, 0, 0, 0.2)", padding: "10px" }}
                                >
                                    <CardContent sx={{ flexGrow: 1, color: "white" }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Transaction ID: {value.id}
                                        </Typography>
                                        <Typography>
                                            To: {value.to}
                                        </Typography>
                                        <Typography>
                                            From: {value.from}
                                        </Typography>
                                        <Typography>
                                            Amount: {value.Amount}
                                        </Typography>
                                        <Typography>
                                            Amount Due: {value.Amount_Due}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

        </ThemeProvider>
    );
}