import {
    Stack,
    Box,
    Typography,
} from "@mui/material";
import PizzaIcon from '@mui/icons-material/LocalPizzaOutlined';
import CroissantIcon from '@mui/icons-material/BakeryDiningOutlined';
import RamenIcon from '@mui/icons-material/RamenDiningOutlined';
import TakeoutIcon from '@mui/icons-material/TakeoutDiningOutlined';
import KebabIcon from '@mui/icons-material/KebabDiningOutlined';
import data from "../data.json";

const countryToIconMapping = {
    it: <PizzaIcon />,
    fr: <CroissantIcon />,
    cn: <TakeoutIcon />,
    in: <KebabIcon />,
    kr: <RamenIcon />,
}

const CountryFilter = ({ setFilter, currentFilter }) => {
    return (
        <Stack direction="row" justifyContent="space-between" my={1}>
            {data.countries.map((country) => {
                const isCurrent = currentFilter === country.code;
                return (
                    <Box 
                        onClick={() => {
                            if (isCurrent) {
                                setFilter(null)
                            } else {
                                setFilter(country.code)
                            }
                        }}
                    >
                        <Box
                            bgcolor={isCurrent ? 'primary.main' : 'secondary.main'}
                            width={50}
                            height={50}
                            borderRadius="50%"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {countryToIconMapping[country.code]}
                        </Box>
                        <Typography textAlign="center">
                            {country.label}
                        </Typography>
                    </Box>
                );
            })}
        </Stack>
    );
};

export default CountryFilter;