function formattedNumberStringToNumber(formattedNumberString) {
    if (isNaN(formattedNumberString)) {
        return Number(formattedNumberString.replace(/,/g, "").replace(/^0+/, ""));
    } else return formattedNumberString;
}

export { formattedNumberStringToNumber };
