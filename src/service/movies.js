export const getAllMovies = async () => {
    const response = await fetch('https://movie-api-get-only-bmc3.vercel.app/api', {
        // cache: 'no-store',
    });
    return await response.json();
}

export const getMovieByGenre = async (genre) => {
    const response = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`);
    return await response.json();
}