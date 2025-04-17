import { Container } from "@mui/material";
import SelectMoneyBox from "components/SelectMoneyBox";
import ExchangeRateCard from "components/ExchangeRateCard";
import ExchangeRatePage from "components/ExchangeRatePage";

function Body() {
    return (
        <Container className="Mpp-body">
            <ExchangeRatePage></ExchangeRatePage>
        </Container>
    );
}

export default Body;
