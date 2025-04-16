import { useState, useEffect } from "react";
import * as React from "react";
import "./App.css";
import { Container } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { getCurrencyList } from "fetchers/fetcher";

function App() {
    let [selectedCurrency, setSelectedCurrency] = useState("KRW");

    const currencyInfoList = [
        { code: "KRW", name: "대한민국 원", unit: "원" },
        { code: "USD", name: "미국 달러", unit: "달러" },
        { code: "EUR", name: "유로", unit: "유로" },
        { code: "JPY", name: "일본 엔", unit: "엔" },
        { code: "CNY", name: "중국 위안", unit: "위안" },
        { code: "GBP", name: "영국 파운드", unit: "파운드" },
        { code: "AUD", name: "호주 달러", unit: "달러" },
        { code: "CAD", name: "캐나다 달러", unit: "달러" },
        { code: "CHF", name: "스위스 프랑", unit: "프랑" },
        { code: "SGD", name: "싱가포르 달러", unit: "달러" },
        { code: "THB", name: "태국 바트", unit: "바트" },
        { code: "VND", name: "베트남 동", unit: "동" },
        { code: "PHP", name: "필리핀 페소", unit: "페소" },
        { code: "TWD", name: "대만 달러", unit: "달러" },
        { code: "IDR", name: "인도네시아 루피아", unit: "루피아" },
    ];
    return (
        <div className="Mpp">
            <header className="Mpp-header text-lg">header</header>
            <Container className="Mpp-body">
                <Select
                    value={selectedCurrency}
                    label="기준"
                    onChange={(e) => {
                        setSelectedCurrency(e.target.value);
                    }}
                >
                    {currencyInfoList.map((cInfo) => {
                        return <MenuItem value={cInfo.code}>{cInfo.name}</MenuItem>;
                    })}
                </Select>
            </Container>
        </div>
    );
}

export default App;
