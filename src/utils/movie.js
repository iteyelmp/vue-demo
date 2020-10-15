import service from './request'

export function fetchMovieList(movie_type, params) {
    return service({
        url: '/v2/movie/' + movie_type,
        method: 'get',
        params: params
    })
}

export function searchMovies(params, cancelToken) {
    return service({
        url: '/v2/movie/search',
        method: 'get',
        params: params,
        cancelToken: cancelToken
    })
}

import { dealData } from "./filter";

export async function getMovieSection(movie_key) {
    let s = {}
    await fetchMovieList(movie_key, {
        count: 10
    }).then(function (res) {
        s.type = movie_key
        s.movies = dealData(res)
    })
    return s
}

import { ref, toRefs } from 'vue'
import { getPageData } from "./page";

export function moviePagination(type) {
    const pageData = getPageData()
    const movies = ref([])

    function getMore() {
        const start = pageData.page * pageData.perpage
        fetchMovieList(type, {
            start: start,
            count: pageData.perpage
        }).then(function (res) {
            pageData.loading = false
            if (res.count === 0) {
                pageData.finished = true
                return
            }
            pageData.page++
            movies.value = movies.value.concat(dealData(res))
        })
    }
    return {
        movies,
        getMore,
        ...toRefs(pageData)
    }

}
