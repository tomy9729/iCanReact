import { useState } from "react";
import * as React from "react";
import { FormControl, Select, MenuItem, TextField, InputAdornment } from "@mui/material";
// import { Box, Typography } from "@mui/material";

function SelectMoneyBox({
    currencyInfoList,
    selectedCurrencyInfo,
    setSelectedCurrencyInfo,
    money,
    setMoney,
}) {
    function onSelectedMoney(e) {
        const code = e.target.value;
        const cInfo = currencyInfoList.find((c) => c.code == code);
        setSelectedCurrencyInfo(cInfo);
        setMoney(cInfo.defaultMoney.toLocaleString());
    }

    function onChangedMoney(e) {
        let input = e.target.value;

        // 쉼표 제거하고 숫자만 추출
        const numericValue = input.replace(/,/g, "").replace(/^0+/, "");
        if (numericValue === "" || /^[0-9]*\.?[0-9]*$/.test(numericValue)) {
            const formatted = Number(numericValue || "0").toLocaleString();
            setMoney(formatted === "0" ? "" : formatted);
        }
    }
    return (
        <FormControl sx={{}}>
            <div>
                <Select
                    sx={{ width: 200 }}
                    value={selectedCurrencyInfo.code}
                    // TODO select box 이쁘게
                    // renderValue={() => (

                    // )}
                    onChange={onSelectedMoney}
                >
                    {currencyInfoList.map((cInfo) => {
                        return (
                            <MenuItem value={cInfo.code}>
                                {cInfo.name}({cInfo.code})
                            </MenuItem>
                        );
                    })}
                </Select>
                <TextField
                    sx={{ width: 200 }}
                    value={money}
                    onChange={onChangedMoney}
                    inputProps={{ min: 0 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {selectedCurrencyInfo.unit}
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        </FormControl>
    );
}

export default SelectMoneyBox;
