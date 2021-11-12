export function nowTime(s = "-", S = ":") {
    const dt = new Date()
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + "").padStart(2, "0")
    const d = (dt.getDate() + "").padStart(2, "0")
    const hh = (dt.getHours() + "").padStart(2, "0")
    const mm = (dt.getMinutes() + "").padStart(2, "0")
    const ss = (dt.getSeconds() + "").padStart(2, "0")
    return `${y}${s}${m}${s}${d} ${hh}${S}${mm}${S}${ss}`
}
export function timeCn(s = new Date(), b = true) {
    const dt = new Date(s)
    const y = dt.getFullYear()
    if (b) {
        const m = dt.getMonth() + 1 + ""
        const d = dt.getDate() + ""
        const hh = dt.getHours() + ""
        const mm = dt.getMinutes() + ""
        const ss = dt.getSeconds() + ""
        return `${y}年${m}月${d}日 ${hh}时${mm}分${ss}秒`
    }
    const m = (dt.getMonth() + 1 + "").padStart(2, "0")
    const d = (dt.getDate() + "").padStart(2, "0")
    const hh = (dt.getHours() + "").padStart(2, "0")
    const mm = (dt.getMinutes() + "").padStart(2, "0")
    const ss = (dt.getSeconds() + "").padStart(2, "0")
    return `${y}年${m}月${d}日 ${hh}时${mm}分${ss}秒`
}
export function formatTime(t = new Date(), s = "-", S = ":") {
    const dt = new Date(t)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + "").padStart(2, "0")
    const d = (dt.getDate() + "").padStart(2, "0")
    const hh = (dt.getHours() + "").padStart(2, "0")
    const mm = (dt.getMinutes() + "").padStart(2, "0")
    const ss = (dt.getSeconds() + "").padStart(2, "0")
    return `${y}${s}${m}${s}${d} ${hh}${S}${mm}${S}${ss}`
}
export function whatDay(s = new Date()) {
    return ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][
        new Date(s).getDay()
    ]
}
export function whatDayEn(s = new Date()) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
        new Date(s).getDay()
    ]
}
