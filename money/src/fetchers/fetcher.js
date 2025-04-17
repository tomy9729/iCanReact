/**
 * fetch 관리
 */
const BASE_URL = "https://api.frankfurter.app";

async function myFetch(endpoint, params = {}) {
    const url = new URL(`${BASE_URL}/${endpoint}`);

    // params 객체를 쿼리 스트링으로 추가
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    try {
        const res = await fetch(url.toString());
        if (!res.ok) throw new Error(`API 요청 실패: ${res.status}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("fetch 오류:", error);
        return null;
    }
}

function getCurrencyList() {
    return myFetch("currencies");
}

function getLatestRates(params) {
    return myFetch("latest", params);
}

/**
 *
 * @param {Code} from
 * @param {Code} to
 * @param {Number} amount
 * @returns {Number}
 *
 * Code : 화폐 코드 ex)"KRW", "USD"
 */
function convert(from, to, amount) {
    if (from == to) return Promise.resolve(amount);
    return getLatestRates({ from, to }).then((res) => {
        return Number((amount * res.rates[to]).toFixed(2));
    });
}

export { getCurrencyList, getLatestRates, convert };
