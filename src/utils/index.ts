export function randomNumber(number: number): number {
    return Math.floor(Math.random() * number);
}

export function checkURL(url: string): boolean {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}