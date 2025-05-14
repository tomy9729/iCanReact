import React, { useEffect, useState } from "react";
import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";
import { convert, fetchRates } from "fetchers/fetcher";

export default function ExchangeRateCard({
    selectedCurrencyInfo,
    currencyInfo,
    amount, // 입력한 외화 금액 (숫자, 예: 100)
    today,
    yesterday,
}) {
    // 1. 나라이름 (코드)
    const name = currencyInfo.name;
    const code = currencyInfo.code;
    // 2. 환율 (선택한나라->카드나라)
    const [rate, setRate] = useState(0);
    useEffect(() => {
        convert(currencyInfo.code, selectedCurrencyInfo.code, currencyInfo.defaultMoney).then(
            (convertedMoney) => {
                setRate(convertedMoney);
            }
        );
    }, [selectedCurrencyInfo]);
    // 3. 변화량 (어제->오늘)
    const [changeMoney, setChangeMoney] = useState(0);
    const [changeRate, setChangeRate] = useState(0);
    const [isSame, setIsSame] = useState(selectedCurrencyInfo.code == currencyInfo.code);
    const [isUp, setIsUp] = useState(changeRate > 0);

    useEffect(() => {
        setIsSame(selectedCurrencyInfo.code == currencyInfo.code);
        if (selectedCurrencyInfo.code == currencyInfo.code) {
            setChangeMoney(0);
            setChangeRate(0);
        } else {
            fetchRates(
                yesterday,
                today,
                currencyInfo.code,
                selectedCurrencyInfo.code,
                currencyInfo.defaultMoney
            ).then((res) => {
                const t = res.rates[today][selectedCurrencyInfo.code];
                const y = res.rates[yesterday][selectedCurrencyInfo.code];
                const _changeMoney = y - t;
                const _changeRate = (100 * (y - t)) / y;
                setChangeMoney(_changeMoney);
                setChangeRate(_changeRate);
                setIsUp(_changeRate > 0);
            });
        }
    }, [selectedCurrencyInfo]);

    // 4. 현재 입력한 돈
    // amount 그대로 출력

    // 5. 환전 결과 (선택한나라->카드나라)
    const [converted, setConverted] = useState(0);
    useEffect(() => {
        convert(selectedCurrencyInfo.code, currencyInfo.code, amount).then((convertedMoney) => {
            setConverted(convertedMoney);
        });
    }, [amount]);

    return (
        <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
                {/* 소제목 */}
                <Typography variant="subtitle2" color="text.secondary">
                    {name} ({code})
                </Typography>

                {/* 주제목 - 현재 환율 */}
                <Typography variant="h5" fontWeight="bold" mt={0.5}>
                    {rate.toLocaleString()}
                    {selectedCurrencyInfo.unit}
                </Typography>

                {/* 어제 대비 변화량 */}
                <Typography
                    variant="body2"
                    color={isSame ? "" : isUp ? "error.main" : "primary.main"}
                    mt={0.5}
                >
                    {isSame ? "=" : isUp ? "▲" : "▼"} {changeMoney.toFixed(2)}{" "}
                    {Math.abs(changeRate).toFixed(2)}%
                </Typography>

                {/* 환전 결과 */}
                <Box mt={2}>
                    <Typography variant="body2" color="text.secondary">
                        {amount.toLocaleString()} {selectedCurrencyInfo.code} ={" "}
                    </Typography>
                    <Typography variant="h6" fontWeight="medium">
                        {converted.toLocaleString()} {currencyInfo.unit}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
