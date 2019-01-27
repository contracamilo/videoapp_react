
//formating 00 for current time on clock
export const  leftPad = (num) => {
    const pad = '00' 
    return pad.substring(0, pad.length - num.length) + num
}

//formating clock
export const formattedTime = (secs) => {
    const minutes = parseInt(secs / 60, 10)
    const seconds = parseInt(secs % 60, 10)
    return `${leftPad(minutes)} : ${leftPad(seconds.toString())}`
}