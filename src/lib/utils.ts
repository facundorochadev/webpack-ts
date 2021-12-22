export const getTime = () => {
    return {
        fyh: new Date().toLocaleTimeString(),
        timestamp: new Date().getTime()
    }
}