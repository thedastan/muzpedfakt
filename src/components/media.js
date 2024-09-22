export const media = (min, max) => {
    return `calc(${min}px + ${max - min} * ((100vw - 320px) / (1280 - 320)))`;
}