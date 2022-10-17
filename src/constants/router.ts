export const HOME_LINK: string = '/'
export const MY_LIST_LINK: string = '/mylist/rated'
export const NOT_FOUND_LINK: string = '/notfound'
export const searchLink = (title: string): string => `/search/${title}`
export const movieLink = (movieId: number): string => `/movie/${movieId}`
