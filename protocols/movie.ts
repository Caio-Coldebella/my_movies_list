export type MovieType = {
    name: string,
    platformId : number,
    genreId: number,
    status: string,
    review?: string,
    grade?: number
};

export type Platform = {
    name: string
}