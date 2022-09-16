export const formatTimeElapsed = (seconds: number) => {
    let minutes = Math.floor(seconds / 60);
    seconds -= (minutes * 60);
    let sesString = `${seconds < 10 ? '0' + seconds : seconds}`;
    let minString = `${seconds < 10 ? '0' + minutes : minutes}`;

    return `${minString}:${sesString}`;
}