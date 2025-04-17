import React, { useEffect, useState } from "react";
import { getLatestRates, convert } from "fetchers/fetcher";
import { formattedNumberStringToNumber } from "util/TextUtil";

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
        { code: "VND", name: "베트남 동", unit: "동", defaultMoney: 10000 },
        { code: "PHP", name: "필리핀 페소", unit: "페소", defaultMoney: 100 },
        { code: "TWD", name: "대만 달러", unit: "달러", defaultMoney: 10 },
        { code: "IDR", name: "인도네시아 루피아", unit: "루피아", defaultMoney: 10000 },
    ];

    const [selectedCurrencyInfo1, setSelectedCurrencyInfo1] = useState(currencyInfoList[0]);
    const [selectedCurrencyInfo2, setSelectedCurrencyInfo2] = useState(currencyInfoList[1]);
    const [money1, setMoney1] = useState("0.00");
    const [money2, setMoney2] = useState("0.00");

    useEffect(() => {
        const fetchRates = async () => {
            convert(
                selectedCurrencyInfo1.code,
                selectedCurrencyInfo2.code,
                formattedNumberStringToNumber(money1)
            ).then((convertedMoney) => {
                const locale = convertedMoney.toLocaleString();
                setMoney2(locale);
            });
        };
        fetchRates();
    }, [selectedCurrencyInfo1, money1]);

    return (
        <div>
            <Box sx={{ p: 2 }}>
                <SelectMoneyBox
                    currencyInfoList={currencyInfoList}
                    selectedCurrencyInfo={selectedCurrencyInfo1}
                    setSelectedCurrencyInfo={setSelectedCurrencyInfo1}
                    money={money1}
                    setMoney={setMoney1}
                />
                <Typography variant="h5">=</Typography> {/* 또는 아이콘으로 대체 가능 */}
                <SelectMoneyBox
                    currencyInfoList={currencyInfoList}
                    selectedCurrencyInfo={selectedCurrencyInfo2}
                    setSelectedCurrencyInfo={setSelectedCurrencyInfo2}
                    money={money2}
                    setMoney={setMoney2}
                />
            </Box>
            <Grid container spacing={2}>
                {currencyInfoList.map((currencyInfo) => {
                    return (
                        <Grid size={4} key={currencyInfo.code}>
                            <ExchangeRateCard
                                country={currencyInfo.name}
                                currencyCode={currencyInfo.code}
                                rate={1392.5}
                                change={-3.2}
                                amount={money1}
                                unit={currencyInfo.unit}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default ExchangeRatePage;
