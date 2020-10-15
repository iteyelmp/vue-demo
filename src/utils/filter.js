export function dealData(res) {
    return res.subjects.map(function (x) {
        let tmp = {}
        tmp.title = x.title.substring(0, 5) + '...'
        tmp.image = x.images.large
        tmp.rating = Math.round(5 * x.rating.average / 10)
        tmp.info = `${x.year} / ${x.countries[0]} / ${x.genres.join(' ')}`
        return tmp
    })
}

// function getStars(score) {
//     const starnum = Math.round(5 * score / 10)
//     let stars = []
//     for (let index = 1; index <= 5; index++) {
//         stars.push(index <= starnum ? 1 : 0)
//     }
//     return stars
// }
