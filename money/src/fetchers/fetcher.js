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

export function getCurrencyList() {
    return myFetch("currencies");
}
