const financekey = "finance"

export const getlocalstorge = ()=>{
    const item = localStorage.getItem(financekey);
    if (!item || item === "[object Object]") return[];
    return JSON.parse(item);
}


export const setlocalstorege = (recenttrans)=>{
    const k = JSON.stringify(recenttrans);
    localStorage.setItem(financekey, k);
}