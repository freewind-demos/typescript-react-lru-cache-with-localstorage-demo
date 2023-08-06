export function fetchSlowData(name: string) {
    return new Promise<string>(resolve => {
        setTimeout(() => {
            resolve(`Hello, ${name} at ${Date.now()}`)
        }, 1000)
    })
}