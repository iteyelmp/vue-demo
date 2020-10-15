import {reactive} from 'vue'
export function getPageData() {
    return reactive({
        page: 0,
        perpage: 15,
        loading: false,
        finished: false
    })
}
