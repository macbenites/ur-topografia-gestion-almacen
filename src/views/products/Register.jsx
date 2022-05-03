import MainCard from 'ui-component/cards/MainCard';
import { Box, Card, Grid, Typography } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 }
];
const Register = () => {
    return (
        <MainCard title="Registrar Ingreso de Insumos">
            <Box display="grid" gap={2}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            renderInput={(params) => <TextField {...params} label="Proveedor" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            renderInput={(params) => <TextField {...params} label="Trabajador" />}
                        />
                    </Grid>
                    <Grid item xs>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            renderInput={(params) => <TextField {...params} label="Almacén" />}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            renderInput={(params) => <TextField {...params} label="Transferencia" />}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={top100Films}
                            renderInput={(params) => <TextField {...params} label="Tipo de Documento" />}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField id="outlined-basic" label="N°. Documento" variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
        </MainCard>
    );
};

export default Register;
