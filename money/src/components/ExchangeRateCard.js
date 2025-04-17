import React, { useEffect, useState } from "react";
import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";

export default function ExchangeRateCard({
    country,
    currencyCode,
    rate,
    change, // 어제 대비 상승/하락 (숫자, 예: -3.2)
    amount, // 입력한 외화 금액 (숫자, 예: 100)
    unit,
}) {
    const isUp = change > 0;
    const converted = rate * amount;

    return (
        <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
                {/* 소제목 */}
                <Typography variant="subtitle2" color="text.secondary">
                    {country} ({currencyCode})
                </Typography>

                {/* 주제목 - 현재 환율 */}
                <Typography variant="h5" fontWeight="bold" mt={0.5}>
                    {rate.toLocaleString()}
                    {unit}
                </Typography>

                {/* 어제 대비 변화량 */}
                <Typography variant="body2" color={isUp ? "error.main" : "primary.main"} mt={0.5}>
                    {isUp ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
                </Typography>

                {/* 환전 결과 */}
                <Box mt={2}>
                    <Typography variant="body2" color="text.secondary">
                        {amount.toLocaleString()} {currencyCode} ={" "}
                    </Typography>
                    <Typography variant="h6" fontWeight="medium">
                        {converted.toLocaleString()} {unit}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}
