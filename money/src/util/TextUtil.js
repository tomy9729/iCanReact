function formattedNumberStringToNumber(formattedNumberString) {
    if (isNaN(formattedNumberString)) {
        return Number(formattedNumberString.replace(/,/g, "").replace(/^0+/, ""));
    } else return formattedNumberString;
}

function timeToDateString(time = new Date()) {
    const year = time.getFullYear();

    // 0부터 시작하므로 +1
    const month = String(time.getMonth() + 1).padStart(2, "0");
    const day = String(time.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

export { formattedNumberStringToNumber, timeToDateString };
