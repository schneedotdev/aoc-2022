declare global {
    interface Number {
        inRange(min: number, max: number): boolean
    }
}

export {}