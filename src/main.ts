console.log(1234)
console.log("hello")

const elementTestParagraph: HTMLInputElement = <HTMLInputElement>document.getElementById("test-paragraph")

elementTestParagraph.innerText = "Hello TypeScript!"

const elementClock: HTMLInputElement = <HTMLInputElement>document.getElementById("clock")

setInterval(() => {
    const nowTime: Date = new Date()
    const nowHour: number = nowTime.getHours()
    const nowMin: number = nowTime.getMinutes()
    const nowSec: number = nowTime.getSeconds()

    elementClock.innerText = `${nowHour} ${nowMin} ${nowSec}`
}, 1000)

