import InventoryCart from './pages/InventoryCart'
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <InventoryCart/>
            </ThemeProvider>

        </>
    )
}

export default App