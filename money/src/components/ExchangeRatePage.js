import React, { useEffect, useState } from "react";
import { getLatestRates, convert, getCurrencyList } from "fetchers/fetcher";
import { formattedNumberStringToNumber, timeToDateString } from "util/TextUtil";

import SelectMoneyBox from "components/SelectMoneyBox";
import ExchangeRateCard from "components/ExchangeRateCard";

import { Grid, Typography, Box } from "@mui/material";

function ExchangeRatePage() {
    const currencyInfoList = [
        { code: "KRW", name: "대한민국 원", unit: "원", defaultMoney: 1000 },
        { code: "USD", name: "미국 달러", unit: "달러", defaultMoney: 1 },
        { code: "EUR", name: "유로", unit: "유로", defaultMoney: 1 },
        { code: "JPY", name: "일본 엔", unit: "엔", defaultMoney: 100 },
        { code: "CNY", name: "중국 위안", unit: "위안", defaultMoney: 1 },
        { code: "GBP", name: "영국 파운드", unit: "파운드", defaultMoney: 1 },
        { code: "AUD", name: "호주 달러", unit: "달러", defaultMoney: 1 },
        { code: "CAD", name: "캐나다 달러", unit: "달러", defaultMoney: 1 },
        { code: "CHF", name: "스위스 프랑", unit: "프랑", defaultMoney: 1 },
        { code: "SGD", name: "싱가포르 달러", unit: "달러", defaultMoney: 1 },
        { code: "THB", name: "태국 바트", unit: "바트", defaultMoney: 1 },
        { code: "PHP", name: "필리핀 페소", unit: "페소", defaultMoney: 100 },

        // 지원하지 않음
        // { code: "VND", name: "베트남 동", unit: "동", defaultMoney: 10000 },
        // { code: "TWD", name: "대만 달러", unit: "달러", defaultMoney: 10 },
        // { code: "IDR", name: "인도네시아 루피아", unit: "루피아", defaultMoney: 10000 },
    ];

    const [selectedCurrencyInfo, setSelectedCurrencyInfo] = useState(currencyInfoList[0]);
    const [money, setMoney] = useState(currencyInfoList[0].defaultMoney.toLocaleString());

    // 어제와 그제지만 편의상
    const today = timeToDateString(new Date(new Date() - 60 * 60 * 24 * 1000));
    const yesterday = timeToDateString(new Date(new Date() - 60 * 60 * 24 * 1000 * 2));

    return (
        <div>
            <Box sx={{ p: 2 }}>
                <SelectMoneyBox
                    currencyInfoList={currencyInfoList}
                    selectedCurrencyInfo={selectedCurrencyInfo}
                    setSelectedCurrencyInfo={setSelectedCurrencyInfo}
                    money={money}
                    setMoney={setMoney}
                />
            </Box>
            <Grid container spacing={2}>
                {currencyInfoList.map((currencyInfo) => {
                    return (
                        <Grid size={4} key={currencyInfo.code}>
                            <ExchangeRateCard
                                selectedCurrencyInfo={selectedCurrencyInfo}
                                currencyInfo={currencyInfo}
                                amount={formattedNumberStringToNumber(money)}
                                today={today}
                                yesterday={yesterday}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default ExchangeRatePage;
